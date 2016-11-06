import React, { Component } from 'react';

export default class Form extends Component {
  handleChange(e) {
    e.preventDefault();
    const newTitle = this.refs.title.value;
    this.props.addWeek(newTitle);
    this.refs.title.value = "";
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleChange.bind(this)} >
          <input type="text" placeholder="title" ref="title"/><br />
          <button className="btn btn-success linkSave" type="submit"
                  onClick={this.handleChange.bind(this)}>Add Week</button>
        </form>
      </div>
    );
  }
}
