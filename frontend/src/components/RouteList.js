import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import PrimaryButton from "../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import {getAllRoutesFromUser} from "../service/RouteService";
import Route from "./Route";


export default function RouteList() {

    const history = useHistory();
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
        <PageLayout>
            <Header headerText={"Routes"}/>
            <ul>
                {routes?.map((route) =>
                        <li key={route.routeId}>
                            <Route route={route}/>
                        </li>
                    )}
            </ul>
            <ButtonGroup>
                <PrimaryButton labelButton={"Dashboard"} handleClick={redirectToDashboard}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectToDashboard() {
        history.push("/dashboard")
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content 60px;
row-gap: var(--size-xl);
height: 100vh;

  ul {
   list-style: none;
   padding: 0;
   display: grid;
   row-gap: var(--size-l);
  }
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`