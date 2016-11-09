import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  handleChange(e) {
    e.preventDefault();
    const newTitle = this.state.title;
    this.props.addWeek(newTitle);
    this.setState({title: ''});
  }

  updateTitle(e) {
    this.setState({title: e.target.value})
  }

  render() {

    return (
      <div className="Form-layout row">
        <div className="col-sm-6 col-md-6 Form-input">
          <input type="text" placeholder="title" value={this.state.title}
                 onChange={this.updateTitle.bind(this)}/><br />
        </div>
        <div className="col-sm-6 col-md-6">
          <button className="btn btn-success" type="submit"
                  onClick={this.handleChange.bind(this)}>Add Week</button>
        </div>
      </div>
    );
  }
}
