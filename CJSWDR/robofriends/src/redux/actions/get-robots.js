import fetch from "fetch-retry";
import { ROBOTS } from "../constants";

export const requestData = () => ({
  type: ROBOTS.GET_ROBOTS_REQUEST,
  payload: true
});

export const requestDataSuccess = data => ({
  type: ROBOTS.GET_ROBOTS_SUCCESS,
  payload: data
});

export const requestDataError = errorMsg => ({
  type: ROBOTS.GET_ROBOTS_FAILURE,
  error: errorMsg
});

export const fetchRobots = () => {
  return dispatch => {
    dispatch(requestData);
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(robots => dispatch(requestDataSuccess(robots)))
      .catch(err => dispatch(requestDataError(err)));
  };
};
