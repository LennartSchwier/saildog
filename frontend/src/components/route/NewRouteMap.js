import React from "react";
import {GoogleMap, Polyline, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../../commons/MapStyles";
import styled from "styled-components/macro";
import PrimaryButton from "../../commons/PrimaryButton";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "100%",
};
const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function NewRouteMap({ latitude, longitude }) {

    const center = {
        lat: latitude,
        lng: longitude,
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    if (loadError) {
        return (
            <p>Error loading map</p>
        );
    }
    if (!isLoaded) {
        return (
            <p>Loading map</p>
        );
    }
    if (isLoaded) {
        return (
            <MapContainer>
                <h1>some route name</h1>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} options={options}>
                    <Polyline/>
                </GoogleMap>
                <button>edit name</button>
            </MapContainer>
        );
    }
}

const MapContainer = styled.section`
width: 100vw;
height: 100vh;

  h1 {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  margin: 0;
  }
  
  button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  border: none;
  background: none;
  }
  
  svg {
  width: 27px;
  height: 27px;
  }
`