import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
class App extends Component {
  state = {
    searchValue: "",
    robots
  };
  handleChange = ({ target: { value } }) => {
    const expression = new RegExp(value, "gi");
    this.setState({
      searchValue: value,
      robots: robots.filter(({ name }) => name.match(expression))
    });
  };
  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
        />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
