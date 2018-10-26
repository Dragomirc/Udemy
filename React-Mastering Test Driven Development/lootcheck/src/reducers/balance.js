import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";
const balanceReducer = (state = 0, action) => {
  let balance;
  switch (action.type) {
    case constants.SET_BALANCE:
      balance = state + action.payload;
      break;
    case constants.DEPOSIT:
      balance = state + action.payload;
      break;
    case constants.WITHDRAW:
      balance = state - action.payload;
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE)) || state;
  }
  bake_cookie(BALANCE_COOKIE, balance);
  return balance;
};

export default balanceReducer;
