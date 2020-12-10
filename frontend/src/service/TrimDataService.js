import {axiosClient} from "./AxiosClient";

const setHeaders = () => {
    return {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwtToken")
        }
    }
}

export const getHeadSailTrim = (course, windSpeed, waveHeight) => {
    const url = `/api/trim/headsail?course=${course}&wind=${windSpeed}&wave=${waveHeight}`
    return axiosClient.get(url, setHeaders()).then(response => (response.data));
}

export const getMainSailTrim = (course, windSpeed, waveHeight) => {
    const url = `/api/trim/mainsail?course=${course}&wind=${windSpeed}&wave=${waveHeight}`
    return axiosClient.get(url, setHeaders()).then(response => (response.data));
}