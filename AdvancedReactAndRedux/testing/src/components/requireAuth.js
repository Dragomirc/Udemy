import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount = () => {
      this.shouldNavigateAway();
    };
    // Our compoent just received new props
    componentDidUpdate = () => {
      this.shouldNavigateAway();
    };
    shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(ComposedComponent);
};
