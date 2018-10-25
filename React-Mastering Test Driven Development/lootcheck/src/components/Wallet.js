import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: undefined
    };
  }
  updateBalance = ({ target: { value } }) => {
    this.setState({
      balance: parseInt(value, 10)
    });
  };
  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
        <button
          className="btn-deposit"
          onClick={() => this.props.deposit(this.state.balance)}
        >
          Deposit
        </button>
        <button
          className="btn-withdraw"
          onClick={() => this.props.withdraw(this.state.balance)}
        >
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ balance: state });
export default connect(
  mapStateToProps,
  { deposit, withdraw }
)(Wallet);
