import _ from "lodash";
import { FETCH_POSTS, CREATE_POST, FETCH_POST } from "../actions";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return _.mapKeys(payload.data, "id");
    case FETCH_POST:
      return { ...state, [payload.data.id]: payload.data };
  }
  return state;
};
