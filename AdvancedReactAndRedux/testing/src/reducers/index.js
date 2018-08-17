import { combineReducers } from "redux";
import commentsReducer from "reducers/comments_reducer";

export const reducers = combineReducers({
  comments: commentsReducer
});
