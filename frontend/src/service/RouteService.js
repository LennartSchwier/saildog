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

/*
export const addNewRoute = () => {
    return axios.post(url, )
}*/
