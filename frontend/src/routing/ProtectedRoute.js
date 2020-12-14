import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function ProtectedRoute(props) {
  const token = localStorage.getItem('jwtToken');
  const decode = token && jwtDecode(token);

  const isValid = () => {
    return decode.exp > new Date().getTime() / 1000;
  };

  return token && isValid() ? <Route {...props} /> : <Redirect to={'/login'} />;
}
