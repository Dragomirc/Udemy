import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongCreate extends Component {
  state = {
    title: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
    this.props.history.push("/");
  };
  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="songInput">Add Song</label>
          <input
            onChange={this.onInputChange}
            type="text"
            id="songInput"
            name="title"
            value={this.state.title}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
export default graphql(mutation)(SongCreate);
