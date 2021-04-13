import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import Auth from './service/auth_service';

const auth= new Auth();

ReactDOM.render(
  <React.StrictMode>
    <App auth={auth}/>
  </React.StrictMode>,
  document.getElementById('root')
);
