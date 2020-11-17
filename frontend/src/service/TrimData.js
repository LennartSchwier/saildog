import axios from 'axios';

const windSpeed = 12;
const waveHeight = 2.4;
const course = "beam_reach";
const url = `/api/trim/headsail?wind=${windSpeed}&wave=${waveHeight}&course=${course}`

export const getHeadSailTrim = () => {
    axios.get(url).then(result => console.log(result.data));
}