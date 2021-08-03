import React, { createContext, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './auth.context';

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  useEffect(() => {
    const getCsrfToken = async () => {
      try {
        const { data } = await authAxios.get('csrf-token');
        // console.log(data);
        authAxios.defaults.headers['x-csrf-token'] = data.csrfToken
      } catch (error) {
        console.log(error, 'error fetching for csrf cookie');
      }
    };
    // getCsrfToken();
    return () => {};
  }, []);
  // authAxios.interceptors.request.use(
  //   (config) => {
  //     config.headers.Authorization = `Bearer ${authStateObj.authState.token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const code = error && error.response ? error.response.status : 0;
      if (code === 401 || code === 403) {
        console.log('error code', code);
      }
      return Promise.reject(error);
    }
  );

  return <Provider value={authAxios}>{children}</Provider>;
};

export { FetchContext, FetchProvider };
