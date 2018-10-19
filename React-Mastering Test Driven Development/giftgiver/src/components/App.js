import React, { Component } from "react";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = { gifts: [] };
  }
  addGift = () => {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    this.setState((state, props) => ({
      gifts: [...state.gifts, { id: Math.max(...ids, 0) + 1 }]
    }));
  };
  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return <div key={gift.id} />;
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}
export default App;
