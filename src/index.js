import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Solarsystem from './assets/threed/solarsystem/Solarsystem';
import Flame from './assets/threed/flame/Flame';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StringAnimation strings = {["yoloswag4jesus","I am Sexy", "and I know it"]}/> */}
    {/* <LandingScene /> */}
    <Flame/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
