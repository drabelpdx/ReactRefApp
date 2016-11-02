import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super();
    this.state = {
      comment: props.comment
    };
  }

  handleCommentAdd(text) {
    this.setState({
      comment: this.state.comment = "Oh No!, I've changed!"
    });
  }
  render() {

    return (
      <div>
        <p>Comment: { this.state.comment } </p>
        <div>
          <input onChange={event => this.setState({ comment: event.target.value })} />
          <button onClick={this.handleCommentAdd.bind(this)}
                  className='btn btn-success commentSave'>Save</button>
        </div>
      </div>
    );
  }
}
