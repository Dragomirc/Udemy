import React, { Component } from "react";
import gql from "graphql-tag";
//Bond the component with the query
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

class SongList extends Component {
  renderSongs = () => {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
      </li>
    ));
  };
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}
// Define the query
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;
export default graphql(query)(SongList);
