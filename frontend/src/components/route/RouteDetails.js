import React, {useContext} from "react";
import Header from "../../commons/Header";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components/macro";
import RouteContext from "../../contexts/RouteContext";
import RouteEnd from "./RouteEnd";
import Leg from "./Leg";
import {IoIosArrowBack} from "react-icons/all";
import ButtonGroupStyles from "../../commons/ButtonGroupStyles";

export default function RouteDetails() {

    const history = useHistory();
    const { id } = useParams();
    const { routes } = useContext(RouteContext);

    const route = routes?.find(route => route.routeId === id);
    const legs = route?.legs;
    const endWaypoint = legs && legs[legs.length - 1].endWaypoint

    return (
        <PageLayout>
            <Header headerText={route?.routeName}/>
            <ul>
                {!legs? null :
                    legs.map((leg, index) => <Leg key={leg.legId} leg={leg} index={index}/>)
                }
                <RouteEnd endWaypoint={endWaypoint}/>
            </ul>
            <ButtonGroup>
                <PrimaryButton labelButton={"Back"} handleClick={redirectToRoutes} icon={<IoIosArrowBack/>}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectToRoutes() {
        history.push("/routes")
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content 60px;
height: 100vh;

  ul {
  padding: 0;
  display: grid;
  row-gap: var(--size-l);
  }
`

const ButtonGroup = ButtonGroupStyles;