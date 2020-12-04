import React from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import MapStyles from "./MapStyles";
import styled from "styled-components/macro";

const libraries = ["places"];
const mapContainerStyle = {
    width: "319px",
    height: "200px",
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

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <StyledDashboardSection>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} options={options}/>
        </StyledDashboardSection>
    );
}

const StyledDashboardSection = styled.section`
    margin: 0 var(--size-l);
    background-color: Transparent;
    box-shadow: var(--size-xs) var(--size-xs) var(--size-s) dimgrey;
    border-radius: var(--size-m);
    padding: var(--size-m);
`