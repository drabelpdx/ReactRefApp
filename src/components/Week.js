import React, { Component } from 'react';
import './Week.css';

export default class Week extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
      addLinkForm: false,
      addLinkButton: true
    };
    // console.log("Construtor");
  }

  handleChange(e) {
    e.preventDefault();
    const newName = this.state.name;
    const newUrl = this.state.url;
    const weekId = this.props.weekId
    this.props.addLink(newName, newUrl, weekId);
    this.setState({name: ''});
    this.setState({url: ''});
    this.onChangeLinkForm();
  }

  updateName(e) {
    this.setState({name: e.target.value})
  }

  updateUrl(e) {
    this.setState({url: e.target.value})
  }

  onChangeLinkForm() {
    this.setState({
      addLinkForm: !this.state.addLinkForm,
      addLinkButton: !this.state.addLinkButton
    });
  }

  render() {
    let links = [];
    if(this.props.week.links !== undefined) {
      links = Object.keys(this.props.week.links).map((key) => {
        return (
          <li key={ key }><a href={ this.props.week.links[key].url }
            target="blank">{ this.props.week.links[key].name }</a>
          </li>
        )
      })
    }

    return (
      <div className='Week-layout'>
        <h2>{ this.props.week.title }</h2>
        <ul>
          { links }
        </ul>
        <br />
        {this.state.addLinkForm ?
          <div className="LinkForm-layout" id="addLinkForm">
            <p onClick={this.onChangeLinkForm.bind(this)}className="glyphicon glyphicon-remove-circle"></p>
            <form onSubmit={this.handleChange.bind(this)} >
              <input type="text" placeholder="link name" value={this.state.name}
                   onChange={this.updateName.bind(this)}/><br />
              <input type="text" placeholder="link url" value={this.state.url}
                   onChange={this.updateUrl.bind(this)}/><br />
              <button className="btn btn-info linkSave"
                      type="submit">Add Link</button>
            </form>
          </div>
        : null}
          {this.state.addLinkButton ?
          <button className="btn btn-info linkSave" id="addLinkButton"
                  onClick={this.onChangeLinkForm.bind(this)}>Add Link</button>
            : null}
      </div>
    );
  }

  /*
    componentWillMount() {
      console.log("Component will mount");
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
