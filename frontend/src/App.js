import React from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route, Redirect} from "react-router-dom";
import Input from "./components/Input";
import useEnvironmentData from "./hooks/useEnvironmentData";
import MainSail from "./components/MainSail";
import Dashboard from "./components/Dashboard";
import usePositioning from "./hooks/usePositioning";
import Login from "./components/Login";
import useLoginData from "./hooks/useLoginData";


export default function App() {

    const [course, setCourse, windSpeed, setWindSpeed, waveHeight, setWaveHeight] = useEnvironmentData();
    const [latitude, longitude, errorMessage] = usePositioning();
    const [loginData, setLoginData, jwtToken, setJwtToken] = useLoginData();


    return (
      <Switch>
          <Route path={"/login"}>
              <Login loginData={loginData} setLoginData={setLoginData}
                     jwtToken={jwtToken} setJwtToken={setJwtToken}
              />
          </Route>
          <Route path={"/dashboard"}>
              <Dashboard latitude={latitude} longitude={longitude} errorMessage={errorMessage} />
          </Route>
          <Route path={"/input"}>
              <Input course={course} setCourse={setCourse}
                         windSpeed={windSpeed} setWindSpeed={setWindSpeed}
                         waveHeight={waveHeight} setWaveHeight={setWaveHeight}
                     latitude={latitude} longitude={longitude}
              />
          </Route>
          <Route path={"/headsail"}>
              <HeadSail
                  course={course} windSpeed={windSpeed} waveHeight={waveHeight}
              />
          </Route>
          <Route path={"/mainsail"}>
              <MainSail
                  course={course} windSpeed={windSpeed} waveHeight={waveHeight}
              />
          </Route>
          <Route path={"/"}>
              <Redirect to={"/dashboard"}/>
          </Route>
      </Switch>
  );
}

