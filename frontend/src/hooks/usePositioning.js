import {useEffect, useState} from "react";

export default function usePositioning() {


    const [geoAvailable, setGeoAvailable] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const geoSuccess = (position) => {
        setGeoAvailable(true);
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
        if (!navigator.geolocation) {
            setGeoAvailable(false)
        }
        else {
            navigator.geolocation.watchPosition(geoSuccess, geoError, geoOptions);
        }
    }, []);

    return [geoAvailable, latitude, longitude, errorMessage];
}