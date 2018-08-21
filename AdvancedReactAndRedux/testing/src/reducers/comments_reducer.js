import { UPDATE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const fetchedComments = action.payload.data.map(({ name }) => name);
      return [...state, ...fetchedComments];
    default:
      return state;
  }
};
