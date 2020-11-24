import React from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route, Redirect} from "react-router-dom";
import TrimInput from "./components/TrimInput";
import useEnvironmentData from "./hooks/useEnvironmentData";
import MainSail from "./components/MainSail";
import Dashboard from "./components/Dashboard";
import usePositioning from "./hooks/usePositioning";
import Login from "./components/Login";
import useLoginData from "./hooks/useLoginData";
import ProtectedRoute from "./routing/ProtectedRoute";


export default function App() {

    const [course, setCourse, windSpeed, setWindSpeed, waveHeight, setWaveHeight] = useEnvironmentData();
    const [latitude, longitude, errorMessage] = usePositioning();
    const [loginData, setLoginData] = useLoginData();


    return (
      <Switch>
          <Route path={"/login"}>
              <Login loginData={loginData} setLoginData={setLoginData}/>
          </Route>
          <ProtectedRoute path={"/dashboard"}>
              <Dashboard latitude={latitude} longitude={longitude} errorMessage={errorMessage} />
          </ProtectedRoute>
          <Route path={"/input"}>
              <TrimInput course={course} setCourse={setCourse}
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

