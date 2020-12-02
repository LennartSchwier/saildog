import React, {useState} from 'react';
import HeadSail from "./components/HeadSail";
import {Switch, Route, Redirect} from "react-router-dom";
import TrimInput from "./components/TrimInput";
import MainSail from "./components/MainSail";
import Dashboard from "./components/Dashboard";
import usePositioning from "./hooks/usePositioning";
import Login from "./components/Login";
import useLoginData from "./hooks/useLoginData";
import ProtectedRoute from "./routing/ProtectedRoute";
import WeatherDataContextProvider from "./contexts/WeatherDataContextProvider";
import RouteList from "./components/RouteList";
import RouteContextProvider from "./contexts/RouteContextProvider";
import RouteDetails from "./components/RouteDetails";


export default function App() {

    const [latitude, longitude, errorMessage] = usePositioning();
    const [loginData, setLoginData] = useLoginData();
    const [course, setCourse] = useState(null);

    return (
        <WeatherDataContextProvider>
            <RouteContextProvider>
                <Switch>
                    <Route path={"/login"}>
                        <Login loginData={loginData} setLoginData={setLoginData}/>
                    </Route>
                    <ProtectedRoute path={"/dashboard"}>
                        <Dashboard latitude={latitude} longitude={longitude} errorMessage={errorMessage} />
                    </ProtectedRoute>
                    <ProtectedRoute path={"/triminput"}>
                        <TrimInput course={course} setCourse={setCourse}
                                   latitude={latitude} longitude={longitude}
                        />
                    </ProtectedRoute>
                    <ProtectedRoute path={"/headsail"}>
                        <HeadSail
                            course={course}
                        />
                    </ProtectedRoute>
                    <ProtectedRoute path={"/mainsail"}>
                        <MainSail
                            course={course}
                        />
                    </ProtectedRoute>
                    <ProtectedRoute path={"/routes"}>
                        <RouteList/>
                    </ProtectedRoute>
                    <ProtectedRoute path={"/routedetails/:id"}>
                        <RouteDetails/>
                    </ProtectedRoute>
                    <Route path={"/"}>
                        <Redirect to={"/dashboard"}/>
                    </Route>
                </Switch>
            </RouteContextProvider>
        </WeatherDataContextProvider>
  );
}

