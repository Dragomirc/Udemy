import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/App";
import Root from "Root";

render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
