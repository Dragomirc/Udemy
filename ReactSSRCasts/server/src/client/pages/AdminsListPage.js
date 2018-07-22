import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";


class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }
  renderAdmins = () => this.props.admins.map(({ id, name }) => <li key={id}>{name}</li>);

  render() {
    return (
      <div>
        <h3>Protected List fo Admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>)
  }
}

const mapStateToProps = ({ admins }) => ({ admins });
const loadData = (store) => store.dispatch(fetchAdmins());
export default { component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsListPage)), loadData }