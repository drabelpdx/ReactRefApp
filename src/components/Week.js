import React, { Component } from 'react';
import Form from './Form';

export default class Week extends Component {

  render() {
    const links = Object.keys(this.props.week.links).map((key) => {
      return (
        <li key={ key }><a href={ this.props.week.links[key].url }
        target="blank">{ this.props.week.links[key].name }</a></li>
      )
    })

    return (
      <div className='week'>
        <h2>{ this.props.week.title }</h2>
        <ul>
          { links }
        </ul>
        <br />
        <Form addLink={this.props.addLink} weekId={this.props.week.id}/>
      </div>
    );
  }
}
