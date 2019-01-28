import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    this.state({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <div>{"OOOOOOPS"}</div>;
    }
    return this.props.children;
  }
}
