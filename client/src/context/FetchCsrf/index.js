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
        authAxios.defaults.headers['x-csrf-token'] = data.csrfToken;
      } catch (error) {
        console.log(error, 'error fetching for csrf cookie');
      }
    };
    // getCsrfToken();
    return () => {};
  }, []);

  return <Provider value={authAxios}>{children}</Provider>;
};

export { FetchContext, FetchProvider };
