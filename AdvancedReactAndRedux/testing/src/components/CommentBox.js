import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };
  // Our component just got rendered
  componentDidMount = () => {
    this.shouldNavigateAway();
  };
  // Our compoent just received new props
  componentDidUpdate = () => {
    this.shouldNavigateAway();
  };
  shouldNavigateAway = () => {
    if (!this.props.auth) {
      console.log("I need to leave!!!");
    }
  };
  handleChange = ({ target }) => {
    this.setState({ comment: target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.updateComments(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(
  mapStateToProps,
  actions
)(CommentBox);
