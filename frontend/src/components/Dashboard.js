import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";
import Buttons from "../commons/Buttons";
import {useHistory} from "react-router-dom";

export default function Dashboard() {

    const history = useHistory();

    const [geoAvailable, setGeoAvailable] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const geoSuccess = (position) => {
        setGeoAvailable(true);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    const geoError = (error) => {
        setErrorMessage("Error: Code " + error.code + " - " + error.message);
    }

    const geoRequest = () => {
        const watchId = navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
    }

    const geoOptions = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 35000
    }

    useEffect(() => {
        console.log("checking availability...")
        if (!"geolocation" in navigator) {
            setGeoAvailable(false)
        }
        else {
            console.log("requesting position...");
            geoRequest();
        }
    }, []);

    return (
        <PageLayout>
            <Header headerText={"Ahoi 'username'"}/>
            <PositionBlock>
                <div>Current location: {geoAvailable ? <b>Available</b> : <b>Not Available</b>}</div>
                {geoAvailable ?
                    <div>
                        <div>Latitude: <b>{latitude}</b></div>
                        <div>Longitude: <b>{longitude}</b></div>
                    </div>
                    :
                    <div id={"error"}>{errorMessage}</div>
                }
            </PositionBlock>
            <div>some content</div>
            <Buttons
                disableButtonOne={false}
                labelButtonOne={"Log Out"}
                disableButtonThree={false}
                labelButtonThree={"Input"}
                clickHandlerThree={clickHandlerInput}
            />
        </PageLayout>
    );

    function clickHandlerInput() {
        history.push("/input");
    }
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 80px 1fr 60px;
row-gap: var(--size-m);
height: 100vh;
`

const PositionBlock = styled.div`
margin: 0 var(--size-l);

  div {
  margin: var(--size-s);
  }
  
  #error {
  margin: var(--size-s);
  color: red;
  }
`