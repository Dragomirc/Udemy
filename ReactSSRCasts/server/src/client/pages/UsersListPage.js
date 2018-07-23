import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";


class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }


  renderUsers = () => this.props.users.map(({ name, id }) => <li key={id}>{name}</li>);

  head = () => (
    <Helmet>
      <title>{`${this.props.users.length} Users Loaded`}</title>
      <meta property="og:title" content="Users App" />
    </Helmet>
  )

  render() {

    return (<div>
      {this.head()}
      Here's a big list of users:
   <ul>{this.renderUsers()}</ul>
    </div>)
  }
}

const mapStateToProps = ({ users }) => ({ users });
const loadData = (store) => {
  return store.dispatch(fetchUsers())
};
export default { component: connect(mapStateToProps, ({ fetchUsers }))(UsersList), loadData }
