import {useState} from "react";

export default function useEnvironmentData() {

    const [course, setCourse] = useState(null);
    const [windSpeed, setWindSpeed] = useState(0);
    const [waveHeight, setWaveHeight] = useState(0);

    return [course, setCourse, windSpeed, setWindSpeed, waveHeight, setWaveHeight];
}