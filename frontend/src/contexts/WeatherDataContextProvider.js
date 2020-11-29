import React, {useEffect, useState} from "react";
import WeatherDataContext from "./WeatherDataContext";
import {getStormGlassWeather} from "../service/StormGlassService";
import usePositioning from "../hooks/usePositioning";

export default function WeatherDataContextProvider({ children }) {

    const [weatherData, setWeatherData] = useState({
            time: "",
            airTemperature: 0,
            waterTemperature: 0,
            pressure: 0,
            visibility: 0,
            currentDirection: 0,
            currentSpeed: 0,
            windDirection: 0,
            windSpeed: 0,
            waveDirection: 0,
            waveHeight: 0,
    })

    const [refactoredWeatherData, setRefactoredWeatherData] = useState({
        windSpeed: 0,
        waveHeight: 0
    });

    const [latitude, longitude] = usePositioning();

    useEffect(() => {
        latitude && longitude && getStormGlassWeather(latitude, longitude)
            .then(data => setWeatherData(data))
    }, [latitude, longitude])




    return (
        <WeatherDataContext.Provider value={{
            weatherData, setWeatherData, refactoredWeatherData, setRefactoredWeatherData
        }}>
            {children}
        </WeatherDataContext.Provider>
    );
}