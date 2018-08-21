import axios from "axios";
import { UPDATE_COMMENT, FETCH_COMMENTS } from "./types";

export const updateComments = comment => {
  return {
    type: UPDATE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};
