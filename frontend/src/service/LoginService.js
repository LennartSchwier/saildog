import axios from 'axios';

export const getJwtToken = (loginData) => {
    const url = `/auth/login`
    return axios.post(url, loginData)
        .then(response => response.data);
}