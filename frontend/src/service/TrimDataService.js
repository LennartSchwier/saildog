import axios from 'axios';

export const getHeadSailTrim = (course, windSpeed, waveHeight) => {
    const url = `/api/trim/headsail?course=${course}&wind=${windSpeed}&wave=${waveHeight}`
    return axios.get(url)
        .then(result => (result.data));
}