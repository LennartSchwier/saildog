import axios from 'axios';

const url = '/api/route'
const setHeaders = () => {
    return {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwtToken")
        }
    }
}

export const getAllRoutesFromUser = () => {
    return axios.get(url, setHeaders()).then(response => response.data);
}

export const addNewRoute = (newRoute) => {
    return axios.post(url, newRoute, setHeaders()).then(response => response.data);
}

export const deleteRoute = (routeId) => {
    const urlWithId = url + "/" + routeId;
    axios.delete(urlWithId, setHeaders()).catch(error => console.log(error));
}
