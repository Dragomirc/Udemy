import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route } from "react-router-dom";
import App from "./components/App";

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    //send cookie whenever you make a query to the backend server
    credentials: "same-origin"
  }
});
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
