import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC0ZsM2rsxhigiLfSVu8QyPH0Pc-54i4iM",
  authDomain: "myreactref.firebaseapp.com",
  databaseURL: "https://myreactref.firebaseio.com",
  storageBucket: "myreactref.appspot.com",
  messagingSenderId: "510755165183"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
