import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CurrentThemeProvider from './context/Theme';
import reportWebVitals from './reportWebVitals';

// Components

// Material UI Baseline
import './index.css';

const app = (
  <BrowserRouter>
    <React.StrictMode>
      <CurrentThemeProvider>
        <App />
      </CurrentThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
