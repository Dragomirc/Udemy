import * as constants from "./constants";
export const setBalance = balance => ({
  type: constants.SET_BALANCE,
  payload: balance
});
export const deposit = deposit => ({
  type: constants.DEPOSIT,
  payload: deposit
});
export const withdraw = amount => ({
  type: constants.WITHDRAW,
  payload: amount
});
