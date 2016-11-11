import React, { Component } from 'react';
import './Week.css';

export default class Week extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: ''
    };
  }

  handleChange(e) {
    e.preventDefault();
    const newName = this.state.name;
    const newUrl = this.state.url;
    const weekId = this.props.weekId
    this.props.addLink(newName, newUrl, weekId);
    this.setState({name: ''});
    this.setState({url: ''});
  }

  updateName(e) {
    this.setState({name: e.target.value})
  }

  updateUrl(e) {
    this.setState({url: e.target.value})
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
        <div className="LinkForm-layout">
          <form onSubmit={this.handleChange.bind(this)} >
            <input type="text" placeholder="link name" value={this.state.name}
                   onChange={this.updateName.bind(this)}/><br />
            <input type="text" placeholder="link url" value={this.state.url}
                   onChange={this.updateUrl.bind(this)}/><br />
            <button className="btn btn-info linkSave"
                    type="submit">Add Link</button>
          </form>
        </div>
      </div>
    );
  }
}
