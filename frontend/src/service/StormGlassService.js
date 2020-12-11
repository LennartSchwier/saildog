import { axiosClient } from './AxiosClient';

const setHeaders = () => {
  return {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
    },
  };
};

export const getStormGlassWeather = (latitude, longitude) => {
  const url = `/api/stormglass?latitude=${latitude}&longitude=${longitude}`;
  return axiosClient.get(url, setHeaders()).then((response) => response.data);
};
