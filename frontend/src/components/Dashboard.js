import React, {useEffect, useState} from "react";
import styled from "styled-components/macro";
import Header from "../commons/Header";

export default function Dashboard() {

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
            console.log("requesting position...")
            navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
        }
    }, []);

    return (
        <PageLayout>
            <Header headerText={"Welcome 'username'"}/>
            <PositionBlock>
                <div>Current location: {geoAvailable ? "Available" : "Not Available"}</div>
                <div>
                    {geoAvailable ?
                        "Latitude:" + latitude  : errorMessage
                    }
                </div>
                <div>
                    {geoAvailable && "Longitude:" + longitude}
                </div>
            </PositionBlock>
        </PageLayout>
    );
}

const PageLayout = styled.div`
display: grid;
grid-template-rows: 60px 80px 1fr 1fr;
row-gap: var(--size-m);
height: 100vh;
`

const PositionBlock = styled.div`
display: grid;
row-gap: var(--size-s);
margin: var(--size-l);
`