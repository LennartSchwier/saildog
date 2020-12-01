import React from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import PrimaryButton from "../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import LocationBLock from "./LocationBlock";
import WeatherBlock from "./WeatherBlock";

export default function Dashboard({latitude, longitude, errorMessage}) {

    const history = useHistory();
    const token = localStorage.getItem('jwtToken');
    const username = token && jwtDecode(token).sub;

    return (
        <PageLayout>
            <Header headerText={'Ahoi ' + username}/>
            <LocationBLock latitude={latitude} longitude={longitude} errorMessage={errorMessage}/>
            <WeatherBlock/>
            <ButtonGroup>
                <PrimaryButton labelButton={"Log Out"} />
                <PrimaryButton labelButton={"Sail Trim"} handleClick={redirectToTrimInput}/>
                <PrimaryButton labelButton={"Routes"} handleClick={redirectToRoutes}/>
            </ButtonGroup>
        </PageLayout>
    );

    function redirectToTrimInput() {
        history.push("/triminput");
    }

    function redirectToRoutes() {
        history.push("/routes");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px min-content min-content 60px;
row-gap: var(--size-xl);
height: 100vh;
`

const ButtonGroup = styled.div`
position: fixed;
bottom: 24px;
`