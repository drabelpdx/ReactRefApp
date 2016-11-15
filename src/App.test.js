import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import Header from './components/Header';
import Week from './components/Week';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC0ZsM2rsxhigiLfSVu8QyPH0Pc-54i4iM",
  authDomain: "myreactref.firebaseapp.com",
  databaseURL: "https://myreactref.firebaseio.com",
  storageBucket: "myreactref.appspot.com",
  messagingSenderId: "510755165183"
};
firebase.initializeApp(config);

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('Header', () => {
  it('check header text', () => {
    const title = 'React Reference Guide';
    const header = shallow (
      <Header title={title} />
    );
    expect(header.text()).toEqual('React Reference Guide');
  });
});

describe('Week', () => {
  it('check week text', () => {
    const week1 = {
      title: 'Week 1',
      links: {id: {name: " test ", url: "url.com"}}
    };
    const week = shallow (
      <Week week={week1} />
    );
    expect(week.text()).toEqual('Week 1 test Add Link');
  });
});
