import React, {useState} from "react";
import Header from "../../commons/Header";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import RouteName from "./RouteName";
import RoutePreview from "./RoutePreview";
import WaypointInput from "./WaypointInput";

export default function NewRoute() {

    const history = useHistory();

    const [legs, setLegs] = useState([]);
    const [newRoute, setNewRoute] = useState({
        routeName: "",
        legs: [
            {
                startLatitude: "",
                startLongitude: "",
                endLatitude: "",
                endLongitude: ""
            }
        ]
    })

    return (
        <PageLayout>
            <Header headerText={"New Route"}/>
            <UserInputField>
                <RouteName newRoute={newRoute} setNewRoute={setNewRoute}/>
                <WaypointInput legs={legs} setLegs={setLegs}/>
                <RoutePreview legs={legs}/>
            </UserInputField>
            <ButtonGroup>
                <PrimaryButton labelButton={"Cancel"} handleClick={redirectBackToRoutes}/>
                <PrimaryButton labelButton={"Add Route (WIP)"} />
            </ButtonGroup>
        </PageLayout>
    );

    function redirectBackToRoutes() {
        history.push("/routes");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content min-content min-content 60px;
row-gap: var(--size-xl);
height: 100vh;
`

const UserInputField = styled.section`
display: grid;
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`
