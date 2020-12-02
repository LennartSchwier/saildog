import React, {useState} from "react";
import Header from "../../commons/Header";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import {addNewRoute} from "../../service/RouteService";
import RouteName from "./RouteName";

export default function NewRoute() {

    const history = useHistory();

    const [newLeg, setNewLeg] = useState({
        startLatitude: "",
        startLongitude: "",
        endLatitude: "",
        endLongitude: ""
    });
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
            <FieldsetStyled>
                <legend>Name</legend>
                <RouteName newRoute={newRoute} setNewRoute={setNewRoute}/>
            </FieldsetStyled>
            <ButtonGroup>
                <PrimaryButton labelButton={"Cancel"} handleClick={redirectBackToRoutes}/>
                <PrimaryButton labelButton={"Add Route"} handleClick={addRoute}/>
            </ButtonGroup>
        </PageLayout>
    );

    function changeHandler(event) {
        setNewLeg({...newLeg, [event.target.name]: event.target.value});
    }

    function addHandler() {
        setLegs([...legs, newLeg]);
        setNewLeg({
            startLatitude: newLeg.endLatitude,
            startLongitude: newLeg.endLongitude,
            endLatitude: "",
            endLongitude: ""
        });
        return(
            <>
                <label>Latitude
                    <input type={"text"} name={"endLatitude"} value={newLeg.endLatitude} onChange={changeHandler}/>
                </label>
                <label>Longitude
                    <input type={"text"} name={"endLongitude"} value={newLeg.endLongitude} onChange={changeHandler}/>
                </label>
                <button type={"button"} onClick={addHandler}>add new waypoint</button>
            </>
        );
    }

    function redirectBackToRoutes() {
        history.push("/routes");
    }

    function addRoute() {
        setNewRoute({...newRoute, legs: legs});
        addNewRoute(newRoute).then(response => console.log(response));
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content min-content 60px;
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
