import { combineReducers } from "redux";
import commentsReducer from "reducers/comments_reducer";
import authReducer from "reducers/auth";

export const reducers = combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
