import React, { Component } from "react";
import CardList from "../CardList";
import SearchBox from "../SearchBox";
import Scroll from "../Scroll";
import "./App.css";
class App extends Component {
  state = {
    searchValue: "",
    robots: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(robots => this.setState({ robots }));
  }
  handleChange = ({ target: { value } }) => {
    this.setState({
      searchValue: value
    });
  };
  render() {
    const expression = new RegExp(this.state.searchValue, "gi");
    const filteredRobots = this.state.robots.filter(({ name }) =>
      name.match(expression)
    );
    if (!this.state.robots.length) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
        />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
