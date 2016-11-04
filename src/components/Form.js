import React, { Component } from 'react';

export default class Form extends Component {
  handleChange(e) {
    e.preventDefault();
    const newName = this.refs.name.value;
    const newUrl = this.refs.url.value;
    const weekId = this.props.weekId
    this.props.addLink(newName, newUrl, weekId);
    this.refs.name.value = "";
    this.refs.url.value = "";
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleChange.bind(this)} >
          <input type="text" placeholder="link name" ref="name"/><br />
          <input type="text" placeholder="link url" ref="url"/>
          <button className="btn btn-success" type="submit">Add Link</button>
        </form>
      </div>
    );
  }
}
