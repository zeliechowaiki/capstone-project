import '../App.css';
import {React, useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Login from './account/Login';
import Signup from './account/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
