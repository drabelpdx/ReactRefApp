import React, { Component } from 'react';
import './Form.css';

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
    this.props.onChangeFormMounted();
  }

  closeForm(e) {
    this.props.onChangeFormMounted();
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
          <button className="btn btn-primary" type="submit"
                  onClick={this.handleChange.bind(this)}>Add Week</button>
          <div className="formX">
            <span onClick={this.closeForm.bind(this)}className="glyphicon glyphicon-remove-circle"></span>
          </div>
        </div>
      </div>
    );
  }

  /*
    componentWillMount() {
      // console.log("Component will mount");
    }

    componentDidMount() {
      console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps) {
      console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log("Should component update", nextProps, nextState);
      return true;
    }

    componentWillUpdate(nextProps, nextState) {
      console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
      console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
      console.log("Component will unmount");
    }
  */
}
