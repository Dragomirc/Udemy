import React, { Component } from "react";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleChange = ({ target }) => {
    this.setState({ comment: target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
