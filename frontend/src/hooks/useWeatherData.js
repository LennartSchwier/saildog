import {useState} from "react";

export default function useWeatherData() {

    const [course, setCourse] = useState(null);
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

    return [course, setCourse, weatherData, setWeatherData];
}