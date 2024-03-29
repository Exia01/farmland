import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Components

// Material UI Baseline
import { CssBaseline } from '@material-ui/core';

import './index.css';

// Contexts
import CurrentThemeProvider from './contexts/theme.context';
import AuthProvider from './contexts/auth.context';
import  ProductProvider from './contexts/product.context';

const app = (
  <BrowserRouter>
    {/* <React.StrictMode> */}
    <CssBaseline>
      <AuthProvider>
        <CurrentThemeProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CurrentThemeProvider>
      </AuthProvider>
    </CssBaseline>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
