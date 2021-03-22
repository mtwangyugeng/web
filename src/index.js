import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LandingScene from './assets/threed/landingscene/LandingScene'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StringAnimation strings = {["yoloswag4jesus","I am Sexy", "and I know it"]}/> */}
    <LandingScene />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
