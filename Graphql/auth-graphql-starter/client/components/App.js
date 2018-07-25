import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import LoginForm from "./LoginForm";
const App = props => {
  return (
    <div>
      <Header />
      <Route path="/login" component={LoginForm} />
    </div>
  );
};

export default App;
