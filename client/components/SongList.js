import React, { Component } from "react";
//Bond the react component with apollo store
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

class SongList extends Component {
  renderSongs = () =>
    this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
      </li>
    ));

  render() {
    console.log("SongList", this.props.data.songs);
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new">add</Link>
      </div>
    );
  }
}
//define the query that can be executed in the future
const query = gql`
  {
    songs {
      title
      id
    }
  }
`;
//This will execute the query when the component is rendered to the screen
export default graphql(query)(SongList);
