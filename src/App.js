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
      weeks: { },
      formMounted: false,
      addWeekButton: true,
      database: firebase.database().ref().child('weeks')
    };
  }

  componentDidMount() {
    this.state.database.on('value', snap => {
      this.setState({
        weeks: snap.val()
      });
    });
  }

  addLink(newName, newUrl, weekId) {
    var newlink = {
      name: newName,
      url: newUrl
    }
    this.state.database.child(weekId).child('links').push(newlink);
  }

  removeLink(weekId, key) {
    this.state.database.child(weekId).child('links').child(key).remove();
  }

  editLink(weekId, key, editName, editUrl) {
    const linkRef = this.state.database.child(weekId).child('links').child(key);
    linkRef.child('name').set(editName);
    linkRef.child('url').set(editUrl);
  }

  addWeek(newTitle) {
    var newWeek = {
      title: newTitle
    }
    this.state.database.push(newWeek);
  }

  removeWeek(weekId) {
    var response = prompt("Are you sure you want to delete the whole week? (Y/N)");
    if (response.toUpperCase() === 'Y') {
      this.state.database.child(weekId).remove();
    }
  }

  editWeek(weekId, editTitle) {
    this.state.database.child(weekId).child('title').set(editTitle);
  }

  onFormMounted() {
    this.setState({
      formMounted: !this.state.formMounted,
      addWeekButton: !this.state.addWeekButton
    });
  }

  render() {
    const title='React Reference Guide';
    let weeks = Object.keys(this.state.weeks).map((key) => {
      return (
        <div key={ key } className="col-sm-6 col-md-6 week">
          <Week weekId={ key } week={ this.state.weeks[key] }
                addLink={ this.addLink.bind(this) }
                editLink={ this.editLink.bind(this) }
                removeLink={ this.removeLink.bind(this) }
                editWeek={ this.editWeek.bind(this) }
                removeWeek={ this.removeWeek.bind(this) } />
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
          <br />
          {this.state.formMounted ? <Form
            addWeek={this.addWeek.bind(this)}
            onFormMounted={this.onFormMounted.bind(this)}/> : null}
          {this.state.addWeekButton ? <button
            onClick={this.onFormMounted.bind(this)}
            className="btn btn-primary"
            id="addWeekButton">Add Week</button> : null}
        </div>
      </div>
    );
  }
}
