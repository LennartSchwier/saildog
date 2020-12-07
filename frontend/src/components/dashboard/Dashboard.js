import React from "react";
import styled from "styled-components/macro";
import Header from "../../commons/Header";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import LocationBLock from "./LocationBlock";
import WeatherBlock from "./WeatherBlock";
import MapBlock from "./MapBlock";
import {BiLogOut} from "react-icons/bi";
import {FaRoute} from "react-icons/fa";
import {GiSailboat} from "react-icons/gi";
import ButtonGroupStyles from "../../commons/ButtonGroupStyles";

export default function Dashboard({latitude, longitude, errorMessage}) {

    const history = useHistory();
    const token = localStorage.getItem('jwtToken');
    const username = token && jwtDecode(token).sub;

    return (
        <PageLayout>
            <Header headerText={'Ahoi ' + username}/>
            <MainStyled>
                <LocationBLock latitude={latitude} longitude={longitude} errorMessage={errorMessage}/>
                <MapBlock latitude={latitude} longitude={longitude}/>
                <WeatherBlock/>
                <div className={"placeholder"}/>
            </MainStyled>
            <ButtonGroup>
                <PrimaryButton labelButton={"Log Out"} icon={<BiLogOut/>}/>
                <PrimaryButton labelButton={"Sail Trim"} handleClick={redirectToTrimInput} icon={<GiSailboat/>}/>
                <PrimaryButton labelButton={"Routes"} handleClick={redirectToRoutes} icon={<FaRoute/>}/>
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
grid-template-rows: min-content 1fr 60px;
height: 100vh;
`

const MainStyled = styled.main`
display: grid;
grid-template-rows: min-content min-content min-content min-content;
row-gap: var(--size-l);
overflow: auto;
padding-top: var(--size-s);

  .placeholder {
  height: var(--size-s);
  }
`

const ButtonGroup = ButtonGroupStyles;