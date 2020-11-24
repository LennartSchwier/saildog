import axios from 'axios';

export const getStormGlassWeather = (latitude, longitude) => {
    const url = `/api/stormglass?latitude=${latitude}&longitude=${longitude}`;
    const token = localStorage.getItem("jwtToken");
    const request = {
        headers: {
            "Authorization": "Bearer " + token
        }
    }
    return axios.get(url, request)
        .then(response => response.data);
}