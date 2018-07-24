import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

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
        <LyricList lyrics={this.props.data.song.lyrics} />
        <LyricCreate id={this.props.match.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.match.params.id } };
  }
})(SongDetail);
