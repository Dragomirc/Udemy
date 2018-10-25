import React from "react";
import { shallow } from "enzyme";
import { Wallet } from "./Wallet";

describe("Wallet", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);
  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });
  it("displays the balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });
  it("creates an inout to deposit into or withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });
  describe("when the user types into the wallet input", () => {
    const userBalance = "25";
    beforeEach(() => {
      expect(
        wallet
          .find(".input-wallet")
          .simulate("change", { target: { value: userBalance } })
      );
    });
    it("it updates the local wallet balance in `state` and converts it to an integer", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });
    describe("and the user wants to make a deposit", () => {
      beforeEach(() => wallet.find(".btn-deposit").simulate("click"));
      it("dispatches the `deposit()` it receives from the props with the local state balance as an argument", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
    describe("and the user wants to withdraw the input amount", () => {
      beforeEach(() => wallet.find(".btn-withdraw").simulate("click"));
      it("dis[atches the `withdraw()` it recevies from the props with the local state balance as an argument", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
