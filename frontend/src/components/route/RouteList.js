import React, {useContext} from "react";
import styled from "styled-components/macro";
import Header from "../../commons/Header";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import Route from "./Route";
import RouteContext from "../../contexts/RouteContext";


export default function RouteList() {

    const history = useHistory();
    const { routes } = useContext(RouteContext);

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
                <PrimaryButton labelButton={"New Route"} handleClick={redirectToNewRoute}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectToDashboard() {
        history.push("/dashboard");
    }

    function redirectToNewRoute() {
        history.push("/newroute");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content 60px;
row-gap: var(--size-xl);
height: 100vh;

  ul {
   list-style: none;
   margin: 0;
   padding: 0;
   display: grid;
   row-gap: var(--size-l);
  }
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`