import * as constants from "./constants";
export const setBalance = balance => ({
  type: constants.SET_BALANCE,
  balance
});
export const deposit = deposit => ({
  type: constants.DEPOSIT,
  deposit
});
export const withdraw = amount => ({
  type: constants.WITHDRAW,
  amount
});
