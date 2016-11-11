import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC0ZsM2rsxhigiLfSVu8QyPH0Pc-54i4iM",
  authDomain: "myreactref.firebaseapp.com",
  databaseURL: "https://myreactref.firebaseio.com",
  storageBucket: "myreactref.appspot.com",
  messagingSenderId: "510755165183"
};
firebase.initializeApp(config);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Header to read React Reference Guide', () => {
  const Header = require('./components/Header');
  Header.title = 'React Reference Guide';
  expect(Header.title).toBe('React Reference Guide');
});
