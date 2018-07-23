import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
//Communicates with the GraphQL server and stores the data locally
import ApolloClient from "apollo-client";
//Integration layer between Apollo store and the React app
import { ApolloProvider } from "react-apollo";

import App from "./components/App";

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
