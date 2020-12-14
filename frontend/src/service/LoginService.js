import { axiosClient } from './AxiosClient';

export const getJwtToken = (loginData) => {
  const url = `/auth/login`;
  return axiosClient.post(url, loginData).then((response) => response.data);
};
