import {useEffect, useState} from "react";

export default function usePositioning() {

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const geoSuccess = (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    }

    const geoError = (error) => {
        setErrorMessage("Error: Code " + error.code + " - " + error.message);
    }

    useEffect(() => {
        const geoOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000
        }
        navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
    }, []);

    return [latitude, longitude, errorMessage];
}