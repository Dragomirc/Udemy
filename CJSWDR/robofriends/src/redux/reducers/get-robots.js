import { ROBOTS } from "../constants";

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ROBOTS.GET_ROBOTS_REQUEST:
      return {
        ...state,
        loading: payload
      };
    case ROBOTS.GET_ROBOTS_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case ROBOTS.GET_ROBOTS_FAILURE:
      return {
        ...state,
        error: payload.data,
        loading: false
      };
    default:
      return state;
  }
};
