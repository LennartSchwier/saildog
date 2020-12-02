import React, {useState} from "react";
import Header from "../../commons/Header";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";

export default function NewRoute() {

    const history = useHistory();
    const [routeName, setRouteName] = useState("");

    return (
        <PageLayout>
            <Header headerText={"New Route"}/>
            <form>
                <label htmlFor={"routeName"}>Name of route: </label>
                <input type={"text"} name={"routeName"} value={routeName} onChange={event => setRouteName(event.target.value)}/>
            </form>
            <ButtonGroup>
                <PrimaryButton labelButton={"Cancel"} handleClick={redirectBackToRoutes}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectBackToRoutes() {
        history.push("/routes");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content 60px;
height: 100vh;
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`
