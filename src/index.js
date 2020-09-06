import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
//import "./styles/common.css";

ReactDOM.render(
<BrowserRouter>
    <App />
  </BrowserRouter>,
 document.getElementById('root'));
 registerServiceWorker();

