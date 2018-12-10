import React, { Component } from 'react';
import LoginPanel from './components/LoginPanel';

export default class Login extends Component {
  static displayName = 'Login';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page">
        <LoginPanel />
      </div>
    );
  }
}
