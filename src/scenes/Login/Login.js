import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import Home from '..//Home';
import { Switch, Route } from 'react-router-dom';
import { login, loggedIn } from './Auth.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login_error: false,
      username: '',
      password: '',
    };
  }

  handleSubmit(e) {
    //var self = this;
    var username = this.state.username;
    var pass = this.state.password;

    login(username, pass, loggedIn => {
      if (loggedIn) {
        console.log(this.props);
        console.log(this.context);
        var mycont = this.context;
        var myobj = this.props;
        //debugger;
        this.props.history.push('/');

        //this.context.router.replace('/');
      } else {
        this.setState({ login_error: true });
        //this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleSubmit(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
