import React, {useEffect, useState} from "react";
import RouteContext from "./RouteContext";
import {addNewRoute, getAllRoutesFromUser} from "../service/RouteService";

export default function RouteContextProvider({ children }) {

    const [routes, setRoutes] = useState([]);

    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        jwtToken && getAllRoutesFromUser().then(route => setRoutes(route));
    }, [jwtToken]);

    const addNewRouteAndUpdateAllRoutes = (newRoute) => {
        addNewRoute(newRoute).then(route => setRoutes([...routes, route]));
    }

    return (
        <RouteContext.Provider value={{routes, addNewRouteAndUpdateAllRoutes}}>
            {children}
        </RouteContext.Provider>
    );
}