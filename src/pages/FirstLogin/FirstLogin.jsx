import React, { Component } from 'react';
import UserLogin from './components/UserLogin';

export default class FirstLogin extends Component {
  static displayName = 'FirstLogin';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="first-login-page">
        <UserLogin />
      </div>
    );
  }
}
