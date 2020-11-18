import {useEffect, useState} from "react";
import {getHeadSailTrim, getMainSailTrim} from "../service/TrimDataService";

export default function useTrimData(course, windSpeed, waveHeight) {

    const [headSailTrimData, setHeadSailTrimData] = useState(null);
    const [mainSailTrimData, setMainSailTrimData] = useState(null);

    useEffect(() => {
        getHeadSailTrim(course, windSpeed, waveHeight)
            .then(data => setHeadSailTrimData(data))
    }, [course, waveHeight, windSpeed])

    useEffect(() => {
        getMainSailTrim(course, windSpeed, waveHeight)
            .then(data => setMainSailTrimData(data))
    }, [course, waveHeight, windSpeed])

    return {headSailTrimData, mainSailTrimData};
}
