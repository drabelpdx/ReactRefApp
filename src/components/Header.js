import React from 'react';
import logo from '../logo.svg';

export default function Header(props) {
  return (
    <div>
      <div className="col-xs-2 col-sm-3 col-md-4">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="col-xs-8 col-sm-6 col-md-4">
        <h2>{props.title}</h2>
      </div>
      <div className="col-xs-2 col-sm-3 col-md-4">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}
