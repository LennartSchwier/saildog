import React, {useContext} from "react";
import Header from "../commons/Header";
import PrimaryButton from "../commons/PrimaryButton";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components/macro";
import RouteContext from "../contexts/RouteContext";
import Leg from "./Leg";

export default function RouteDetails() {

    const history = useHistory();
    const { id } = useParams();
    const { routes } = useContext(RouteContext);

    const route = routes?.find(route => route.routeId === id);
    const legs = route?.legs;


    return (
        <PageLayout>
            <Header headerText={route?.routeName}/>
            <ul>
                {legs?.map((leg) =>
                    <li key={leg.legId}>
                        <Leg legs={legs} leg={leg}/>
                    </li>
                )}
            </ul>
            <ButtonGroup>
                <PrimaryButton labelButton={"Back"} handleClick={redirectToRoutes}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectToRoutes() {
        history.push("/routes")
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 1fr 60px;
height: 100vh;

  ul {
   list-style: none;
   margin: 0;
   padding: var(--size-m) 0;
   display: grid;
   row-gap: var(--size-l);
   overflow: auto;
   
    li:last-child:after {
    content: '';
    display: block;
    height: var(--size-m);
    }
  }
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`