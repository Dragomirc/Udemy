import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
//Communicates with the GraphQL server and stores the data locally
import ApolloClient from "apollo-client";
//Integration layer between Apollo store and the React app
import { ApolloProvider } from "react-apollo";

import App from "./components/App";

//This configuration takes ever single piece of data fetched from the backend, and runs it through this function
//!! every query needs to request the id in order to make this work
const client = new ApolloClient({
  dataIdFromObject: object => object.id
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
