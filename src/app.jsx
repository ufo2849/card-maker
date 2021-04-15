import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({auth}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path={['/', '/home']} exact>
            <Login auth={auth}/>
          </Route>
          <Route path='/maker' exact>
            <Maker auth={auth}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
