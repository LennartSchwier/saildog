import React from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import MapStyles from "./MapStyles";

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
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} options={options}/>
    );
}