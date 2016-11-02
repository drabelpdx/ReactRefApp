import React, { Component } from 'react';

export default class Week extends Component {

  handleChange(event) {
    const commentChange = "Oh No!, I've changed!"
    const weekId = this.props.week.id
    this.props.changeComment(commentChange, weekId);
    console.log('handleChange fired');
  }

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
        <p>Comment: { this.props.week.comment } </p>
        <button onClick={() => this.handleChange()}
                className='btn btn-success commentSave'>Save</button>
        <hr />
      </div>
    );
  }
}
