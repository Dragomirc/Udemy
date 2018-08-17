import React from "react";
import { render } from "react-dom";
import { createStore, createWithMiddleware } from "redux";
import { Provider } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// const store = createStore();
export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};
