import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";

class LyricCreate extends Component {
  state = {
    content: ""
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.id
      }
      // refetchQueries: [{ query: fetchSong, variables: { id: this.props.id } }]
    });
    this.setState({ content: "" });
  };
  render() {
    return (
      <form className="container" onSubmit={this.onFormSubmit}>
        <label htmlFor="content">Add a Lyric</label>
        <input
          type="text"
          id="content"
          name="content"
          value={this.state.content}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

const addLyricToSong = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(addLyricToSong)(LyricCreate);
