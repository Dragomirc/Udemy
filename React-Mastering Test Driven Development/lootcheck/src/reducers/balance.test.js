import balanceReducer from "./balance";
import * as constants from "../actions/constants";

describe("balanceReducer", () => {
  it("sets a balance", () => {
    const balance = 10;
    expect(
      balanceReducer(undefined, {
        type: constants.SET_BALANCE,
        payload: balance
      })
    ).toBe(balance);
  });
  it("deposits into the balance", () => {
    const deposit = 10;
    const initialState = 5;
    expect(
      balanceReducer(initialState, {
        type: constants.DEPOSIT,
        payload: deposit
      })
    ).toEqual(initialState + deposit);
  });
});
it("withdraws from the balance", () => {
  const withdrawal = 5;
  const initialState = 15;
  expect(
    balanceReducer(initialState, {
      type: constants.WITHDRAW,
      payload: withdrawal
    })
  ).toEqual(initialState - withdrawal);
});
