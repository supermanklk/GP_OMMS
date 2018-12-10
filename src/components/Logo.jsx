import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo" style={{}}>
        <Link to="/" className="logo-text">
          在线视频学习后台管理系统(超人)
        </Link>
      </div>
    );
  }
}
