import React, {useState} from 'react';
import HeadSail from "./components/trim/HeadSail";
import {Switch, Route, Redirect} from "react-router-dom";
import TrimInput from "./components/trim/TrimInput";
import MainSail from "./components/trim/MainSail";
import Dashboard from "./components/dashboard/Dashboard";
import usePositioning from "./hooks/usePositioning";
import Login from "./components/login/Login";
import useLoginData from "./hooks/useLoginData";
import ProtectedRoute from "./routing/ProtectedRoute";
import WeatherDataContextProvider from "./contexts/WeatherDataContextProvider";
import RouteList from "./components/route/RouteList";
import RouteContextProvider from "./contexts/RouteContextProvider";
import RouteDetails from "./components/route/RouteDetails";
import IconContextProvider from "./contexts/IconContextProvider";
import NewRouteMap from "./components/route/NewRouteMap";


export default function App() {

    const [latitude, longitude, errorMessage] = usePositioning();
    const [loginData, setLoginData] = useLoginData();
    const [course, setCourse] = useState(null);

    return (
        <WeatherDataContextProvider>
            <RouteContextProvider>
                <IconContextProvider>
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
                        <ProtectedRoute path={"/newroute"}>
                            <NewRouteMap latitude={latitude} longitude={longitude}/>
                        </ProtectedRoute>
                        <Route path={"/"}>
                            <Redirect to={"/dashboard"}/>
                        </Route>
                    </Switch>
                </IconContextProvider>
            </RouteContextProvider>
        </WeatherDataContextProvider>
  );
}

