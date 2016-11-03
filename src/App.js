import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Header from './components/Header';
import Week from './components/Week';

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

  changeComment(commentChange, weekId) {
    let week = 'week' + weekId;
    this.setState(previousState => {
      previousState.weeks[week].comment = commentChange
      return previousState
    });
  }

  render() {
    const title='React Reference Guide';
    var weeks = [];
    var data = this.state.weeks;

    for(var week in data) {
      if(week !== null) {
        weeks.push(data[week])
      }
    }

    return (
      <div className="App">
        <div className='row App-header'>
          <Header title={title} />
        </div>
        <div className="App-layout">
          <div className='row'>
            { weeks.map((week, i) =>
              <div key={ i } className="col-sm-6 col-md-6 week">
                <Week key={ i } week={ week } changeComment={this.changeComment.bind(this)}/>
                <hr />
              </div>

            )}
          </div>
        </div>
      </div>
    );
  }
}
