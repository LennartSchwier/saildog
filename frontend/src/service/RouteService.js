import { axiosClient } from './AxiosClient';

const url = '/api/route';
const setHeaders = () => {
  return {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
    },
  };
};

export const getAllRoutesFromUser = () => {
  return axiosClient.get(url, setHeaders()).then((response) => response.data);
};

export const addNewRoute = (newRoute) => {
  return axiosClient
    .post(url, newRoute, setHeaders())
    .then((response) => response.data);
};

export const deleteRoute = (routeId) => {
  const urlWithId = url + '/' + routeId;
  axiosClient
    .delete(urlWithId, setHeaders())
    .catch((error) => console.log(error));
};
