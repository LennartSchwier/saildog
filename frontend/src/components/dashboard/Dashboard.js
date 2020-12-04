import React from "react";
import styled from "styled-components/macro";
import Header from "../../commons/Header";
import PrimaryButton from "../../commons/PrimaryButton";
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import LocationBLock from "./LocationBlock";
import WeatherBlock from "./WeatherBlock";
import {BiLogOut, GiSailboat, FaRoute} from "react-icons/all";
import MapBlock from "./MapBlock";

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
                <IconLabelPair>
                    <BiLogOut className={"icon"}/>
                    <PrimaryButton labelButton={"Log Out"} />
                </IconLabelPair>
                <IconLabelPair>
                    <GiSailboat className={"icon"}/>
                    <PrimaryButton labelButton={"Sail Trim"} handleClick={redirectToTrimInput}/>
                </IconLabelPair>
                <IconLabelPair>
                    <FaRoute className={"icon"}/>
                    <PrimaryButton labelButton={"Routes"} handleClick={redirectToRoutes}/>
                </IconLabelPair>
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
grid-template-rows: 60px 1fr 60px;
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

const ButtonGroup = styled.div`
position: fixed;
bottom: 0;
margin-bottom: var(--size-s);
display: flex;
justify-content: space-evenly;
width: 100vw;
`

const IconLabelPair = styled.div`
display: grid;
row-gap: var(--size-xs);
justify-items: center;
`