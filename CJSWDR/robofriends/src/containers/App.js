import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../redux/actions/get-robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
class App extends Component {
  state = {
    searchValue: ""
  };

  componentDidMount() {
    this.props.fetchRobots();
  }
  handleChange = ({ target: { value } }) => {
    this.setState({
      searchValue: value
    });
  };
  render() {
    const { searchValue } = this.state;
    const robots = this.props;
    const expression = new RegExp(searchValue, "gi");
    const filteredRobots = robots.filter(({ name }) => name.match(expression));
    if (!this.state.robots.length) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchValue={searchValue} handleChange={this.handleChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = ({ robots }) => ({ robots });
export default connect(
  mapStateToProps,
  { fetchRobots }
)(App);
