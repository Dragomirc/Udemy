import * as constants from "../actions/constants";

const balanceReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.SET_BALANCE:
      return state + action.payload;
    default:
      return state;
  }
};

export default balanceReducer;
