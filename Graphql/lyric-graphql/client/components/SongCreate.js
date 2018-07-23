import React, { Component } from "react";
//Bond the component with the mutation
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class SongCreate extends Component {
  state = {
    title: ""
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title
        }
      })
      .then(res => {
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="createSong">Song Title:</label>
          <input
            type="text"
            id="createSong"
            name="title"
            onChange={this.onInputChange}
            value={this.state.title}
          />
          <button>Create</button>
        </form>
      </div>
    );
  }
}

//Define the mutation
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;
export default graphql(mutation)(SongCreate);
