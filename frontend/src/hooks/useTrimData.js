/*
import {useEffect, useState} from "react";
import {getHeadSailTrim} from "../service/TrimDataService";

export default function useTrimData(windSpeed, waveHeight, course) {

    const [headSailTrimData, setHeadSailTrimData] = useState(null);

    useEffect(() => {
        getHeadSailTrim(windSpeed, waveHeight, course)
            .then(data => setHeadSailTrimData(data))
    }, [course, waveHeight, windSpeed])

    return [headSailTrimData];
}*/
