import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import LandingScene from './landingscene/LandingScene';
import Flame from './assets/threed/flame/Flame'
import ProjectScene from './projectscene/ProjectScene';
import AboutScene from './aboutscene/AboutScene';
import ContactScene from './contactscene/ContactScene';
import FooterScene from './footerscene/FooterScene';

ReactDOM.render(
  <React.StrictMode>
    <Flame />
    <LandingScene/>
    <AboutScene/>
    <ProjectScene/>
    <ContactScene/>
    <FooterScene/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
