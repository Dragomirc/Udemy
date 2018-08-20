import commentsReducer from "reducers/comments_reducer";
import { UPDATE_COMMENT } from "actions/types";

it("handles actions of type UPDATE_COMMENTS", () => {
  const action = {
    type: UPDATE_COMMENT,
    payload: "New Comments"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comments"]);
});
it("handles action with unknown type", () => {
  const action = {
    type: "UNKOWN TYPE",
    payload: "New Comment"
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
});
