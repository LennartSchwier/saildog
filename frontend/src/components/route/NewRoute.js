import React, {useState} from "react";
import Header from "../../commons/Header";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import RouteName from "./RouteName";
import CreateRouting from "./CreateRouting";

export default function NewRoute() {

    const history = useHistory();

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
            <FieldsetStyled>
                <legend>Name</legend>
                <RouteName newRoute={newRoute} setNewRoute={setNewRoute}/>
            </FieldsetStyled>
            <FieldsetStyled>
                <legend>Routing</legend>
                <CreateRouting/>
            </FieldsetStyled>
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
grid-template-rows: 60px min-content minmax(min-content, 1fr) 60px;
height: 100vh;
`

const FieldsetStyled = styled.fieldset`
border-radius: var(--size-s);
border-color: lightgrey;
margin: var(--size-m);
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`
