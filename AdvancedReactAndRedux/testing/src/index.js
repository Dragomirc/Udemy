import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import Root from "Root";

render(
  <Root>
    <App />
  </Root>,
  document.getElementById("root")
);
