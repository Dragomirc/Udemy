import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { fetchPosts } from "../actions";

import PostsNew from "./posts_new";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts = () =>
    _.map(this.props.posts, ({ id, title, categories, content }) => {
      return (
        <Link key={id} to={`posts/${id}`}>
          <li className="list-group-item">
            <div>Title: {title}</div>
            <div>Category: {categories}</div>
            <p>Content: {content}</p>
          </li>
        </Link>
      );
    });
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts:</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

//Anything returned from this function will end up as props on the PostsIndex container
const mapDispatchStateToProps = dispatch => {
  //Whenever fetchPosts is called , the result should be passed  to all of our reducers
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchStateToProps
)(PostsIndex);
