import React from "react";
import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import MapStyles from "./MapStyles";
import styled from "styled-components/macro";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "12px"
};
const options = {
    styles: MapStyles,
    disableDefaultUI: true
}

export default function MapBlock({ latitude, longitude }) {

    const center = {
        lat: latitude,
        lng: longitude
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyAWKmAYQVh0A4pvW1zz453QRztS69Alh-s",
        libraries
    })

    if (loadError) {
        return (
            <StyledDashboardSection>
                <p>Error loading map</p>
            </StyledDashboardSection>
        );
    }
    if (!isLoaded) {
        return (
            <StyledDashboardSection>
                <p>Loading map</p>
            </StyledDashboardSection>
        );
    }
    if (isLoaded) {
        return (
            <StyledDashboardSection>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} options={options}>
                    <Marker position={{ lat: latitude, lng: longitude }} />
                </GoogleMap>
            </StyledDashboardSection>
        );
    }
}

const StyledDashboardSection = styled.section`
margin: 0 var(--size-l);
background-color: Transparent;
box-shadow: 2px 2px var(--size-s) grey;
border-radius: var(--size-m);
height: 300px;
overflow: auto;
`;