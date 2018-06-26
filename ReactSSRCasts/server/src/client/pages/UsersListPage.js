import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";


class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }


  renderUsers = () => this.props.users.map(({ name, id }) => <li key={id}>{name}</li>);

  render() {

    return (<div>Here's a big list of users:
   <ul>{this.renderUsers()}</ul>
    </div>)
  }
}

const mapStateToProps = ({ users }) => ({ users });
const loadData = (store) => {

  return store.dispatch(fetchUsers())
};
export default { component: connect(mapStateToProps, ({ fetchUsers }))(UsersList), loadData }
