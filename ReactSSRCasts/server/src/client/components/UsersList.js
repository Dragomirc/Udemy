import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";


class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  // renderUsers() { return this.props.users.map(({ name, id }) => <li key={id}>{name}</li>) }
  renderUsers = () => this.props.users.map(({ name, id }) => <li key={id}>{name}</li>);

  render() {

    return (<div>Here's a big list of users:
   <ul>{this.renderUsers()}</ul>
    </div>)
  }
}

const mapStateToProps = ({ users }) => ({ users })
export default connect(mapStateToProps, ({ fetchUsers }))(UsersList)
