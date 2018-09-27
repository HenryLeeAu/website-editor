import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputEmail from '../../components/Inputs/InputEmail';
import InputPassword from '../../components/Inputs/InputPassword';
import Button from '../../components/Button';
//import {clickLogin, usernameChange, passwordChange} from '../../actions/loginActions.js'
import './index.css';
import update from 'immutability-helper';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  handleInputChange = (e, key) => {
    this.setState(
      update(this.state, {
        [key]: { $set: e.target.value },
      })
    );
  };
  render() {
    return (
      <div id="Login">
        <div className="wrap">
          <div className="padd">
            <label htmlFor="email">Email</label>
            <InputEmail
              id="email"
              name="email"
              value={this.state.email}
              onChange={e => this.handleInputChange(e, 'email')}
            />
          </div>
          <div className="padd">
            <label htmlFor="password">Password</label>
            <InputPassword
              id="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleInputChange(e, 'password')}
            >
              \
            </InputPassword>
          </div>
          {/*
          <div className="colorWarning padd">this.props.login.errorMessage</div>*/}
          <div className="padd">
            <Button Primary onClick={this.props.onLoginClick}>
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
