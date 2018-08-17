import { UPDATE_COMMENT } from "actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};
