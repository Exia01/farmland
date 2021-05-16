import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Components
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

// Material UI Baseline
import { CssBaseline } from '@material-ui/core';

import './index.css';

// Contexts
import CurrentThemeProvider from './contexts/theme.context';

const app = (
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      {/* <React.StrictMode> */}
      <CssBaseline>
        <CurrentThemeProvider>
          <App />
        </CurrentThemeProvider>
      </CssBaseline>
      {/* </React.StrictMode> */}
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
