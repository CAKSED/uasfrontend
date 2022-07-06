import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbarcomponent';

ReactDOM.render(
  <React.StrictMode>
    <Navbarcomponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

