import React, { Component } from 'react';
import Comment from './Comment';

export default class Week extends Component {
  render() {
    var links = [];
    var data = this.props.week.links;

    for(var link in data) {
      if(link !== null) {
        links.push(data[link])
      }
    }

    return (
      <div className='week'>
        <h2>{ this.props.week.title }</h2>
        <ul>
          { links.map((link, i) =>
            <li key={ i }><a href={ link.url } target="blank">{ link.name }</a></li>
          )}
        </ul>
        <br />
        <Comment comment={this.props.week.comment}/>
        <hr />
      </div>
    );
  }
}
