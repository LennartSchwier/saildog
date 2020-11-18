import axios from 'axios';

export const getHeadSailTrim = (windSpeed, waveHeight, course) => {
    const url = `/api/trim/headsail?wind=${windSpeed}&wave=${waveHeight}&course=${course}`
    return axios.get(url)
        .then(result => (result.data));
}