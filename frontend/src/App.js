import React from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route, Redirect} from "react-router-dom";
import TrimInput from "./components/TrimInput";
import useWeatherData from "./hooks/useWeatherData";
import MainSail from "./components/MainSail";
import Dashboard from "./components/Dashboard";
import usePositioning from "./hooks/usePositioning";
import Login from "./components/Login";
import useLoginData from "./hooks/useLoginData";
import ProtectedRoute from "./routing/ProtectedRoute";


export default function App() {

    const [course, setCourse, weatherData, setWeatherData] = useWeatherData();
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
          <ProtectedRoute path={"/triminput"}>
              <TrimInput course={course} setCourse={setCourse}
                         weatherData={weatherData} setWeatherData={setWeatherData}
                         latitude={latitude} longitude={longitude}
              />
          </ProtectedRoute>
          <ProtectedRoute path={"/headsail"}>
              <HeadSail
                  course={course} weatherData={weatherData}
              />
          </ProtectedRoute>
          <ProtectedRoute path={"/mainsail"}>
              <MainSail
                  course={course} weatherData={weatherData}
              />
          </ProtectedRoute>
          <Route path={"/"}>
              <Redirect to={"/dashboard"}/>
          </Route>
      </Switch>
  );
}

