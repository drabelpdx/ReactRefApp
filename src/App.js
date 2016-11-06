import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Header from './components/Header';
import Week from './components/Week';
import Form from './components/Form';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      weeks: { }
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const weeksRef = rootRef.child('weeks');
    weeksRef.on('value', snap => {
      this.setState({
        weeks: snap.val()
      });
    });
  }

  addLink(newName, newUrl, weekId) {
    const rootRef = firebase.database().ref();
    const weeksRef = rootRef.child('weeks');
    const weekRef = weeksRef.child(weekId);
    const linksRef = weekRef.child('links');

    var newlink = {
      name: newName,
      url: newUrl
    }
    linksRef.push(newlink);
  }

  addWeek(newTitle) {
    const rootRef = firebase.database().ref();
    const weeksRef = rootRef.child('weeks');

    var newWeek = {
      title: newTitle
    }
    weeksRef.push(newWeek);
  }

  render() {
    const title='React Reference Guide';
    let weeks = Object.keys(this.state.weeks).map((key) => {
      return (
        <div key={ key } className="col-sm-6 col-md-6 week">
          <Week key={ key } weekId={ key } week={ this.state.weeks[key] }
                addLink={this.addLink.bind(this)} />
          <hr />
        </div>
      );
    })

    return (
      <div className="App">
        <div className='row App-header'>
          <Header title={title} />
        </div>
        <div className="App-layout">
          <div className='row'>
            { weeks }
          </div>
          <br /><br />
          <Form addWeek={this.addWeek.bind(this)}/>
        </div>
      </div>
    );
  }
}
