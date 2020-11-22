import axios from 'axios';

export const getHeadSailTrim = (course, windSpeed, waveHeight) => {
    const url = `/api/trim/headsail?course=${course}&wind=${windSpeed}&wave=${waveHeight}`
    return axios.get(url)
        .then(response => (response.data));
}

export const getMainSailTrim = (course, windSpeed, waveHeight) => {
    const url = `/api/trim/mainsail?course=${course}&wind=${windSpeed}&wave=${waveHeight}`
    return axios.get(url)
        .then(response => (response.data));
}