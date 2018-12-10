import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';
export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <IntroBanner/>
      </div>
    );
  }
}
