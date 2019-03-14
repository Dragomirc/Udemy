import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    index: 0
  };

  onClick = name => {
    // this.setState({
    //   index: Math.floor(Math.random() * 3 - 0) + 1
    // });
    this.setState({ persons: [{ name, age: 28 }] });
  };
  render() {
    return (
      <div className="App">
        <div>Hi I'm a React app</div>
        <button onClick={this.onClick.bind(this, "Drago")}>Switch name</button>
        <Person {...this.state.persons[this.state.index]}>
          I'm a great developer
        </Person>
      </div>
    );
  }
}

export default App;

//REACTHOOKS VERSION
// const app = name => {
//   const [persons, setPersons] = useState([
//     { name: "Max", age: 28 },
//     { name: "Manu", age: 29 },
//     { name: "Stephanie", age: 26 }
//   ]);
//   const [index, setIndex] = useState(0);
//   const onClick = () => {
//     setIndex(Math.floor(Math.random() * 3 - 0));
//   };

//   return (
//     <div className="App">
//       <div>Hi I'm a React app</div>
//       <button onClick={onClick}>Switch name</button>
//       <Person {...persons[index]}>I'm a great developer</Person>
//     </div>
//   );
// };

//export default app;
