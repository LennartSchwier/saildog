import React, {useEffect, useState} from "react";
import RouteContext from "./RouteContext";
import {getAllRoutesFromUser} from "../service/RouteService";

export default function RouteContextProvider({ children }) {

    const [routes, setRoutes] = useState([
        {
            routeId: "",
            routeName: "",
            creator: "",
            legs: [
                {
                    legId: "",
                    startWaypoint: {
                        typeOfWaypoint: null,
                        latitude: "",
                        longitude: "",
                    },
                    endWaypoint: {
                        typeOfWaypoint: null,
                        latitude: "",
                        longitude: "",
                    },
                    distance: 0.0,
                    bearing: 0
                }
            ],
            totalDistance: 0
        }
    ]);

    useEffect(() => {
        getAllRoutesFromUser().then(route => setRoutes(route));
    }, []);

    return (
        <RouteContext.Provider value={{ routes }}>
            {children}
        </RouteContext.Provider>
    );
}