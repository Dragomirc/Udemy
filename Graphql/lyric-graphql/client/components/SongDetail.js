import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    if (!song) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back</Link>
        <h4>SongDetail: {song.title}</h4>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  }
})(SongDetail);
