import axios from 'axios';

export const getStormGlassWeather = (latitude, longitude) => {
    const url = `/api/stormglass?latitude=${latitude}&longitude=${longitude}`
    return axios.get(url)
        .then(response => response.data);
}