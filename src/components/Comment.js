import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super();
    this.state = {
      comment: props.comment
    };
  }

  render() {

    return (
      <div>
        <p>Comment: { this.props.comment } </p>
        <div>
          <input onChange={event => this.setState({ comment: event.target.value })} />
        </div>
      </div>
    );
  }
}
