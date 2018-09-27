import React, { Component } from 'react';
import WorkPanel from './scenes/WorkPanel/';
import Login from './scenes/Login/';
import Home from './scenes/Home/';
import CreateNewTemplate from './scenes/Home/CreateNewTemplate';
import CreateNewProject from './scenes/Home/CreateNewProject';
import './App.css';
import { Switch, Router, Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from './scenes/Login/Auth.js';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreateNewTemplate} />
          <Route path="/edit/:projectId" component={WorkPanel} />
        </Switch>
      </div>
    );
  }
}

export default App;