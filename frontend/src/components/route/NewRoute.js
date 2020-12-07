import React, {useState} from "react";
import Header from "../../commons/Header";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import RouteName from "./RouteName";
import RoutePreview from "./RoutePreview";
import WaypointInput from "./WaypointInput";
import {addNewRoute} from "../../service/RouteService";
import ButtonGroupStyles from "../../commons/ButtonGroupStyles";
import {IoIosAdd} from "react-icons/io";
import {MdCancel} from "react-icons/md";

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
                <PrimaryButton labelButton={"Cancel"} handleClick={redirectBackToRoutes} icon={<MdCancel/>}/>
                <PrimaryButton labelButton={"Add Route"} handleClick={createNewRoute} icon={<IoIosAdd/>}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectBackToRoutes() {
        history.push("/routes");
    }

    function createNewRoute() {
        setNewRoute({...newRoute, legs: legs});
        addNewRoute(newRoute);
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
grid-template-rows: min-content min-content min-content;
row-gap: var(--size-s);
`

const ButtonGroup = ButtonGroupStyles;
