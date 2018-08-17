import { UPDATE_COMMENT } from "./types";

export const updateComments = comment => {
  return {
    type: UPDATE_COMMENT,
    payload: comment
  };
};
