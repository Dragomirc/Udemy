import React from "react";
import { HashRouter, Route } from "react-router-dom";
//Interacts with the garphql server on the backend.Get data and stores its locally
import ApolloClient from "apollo-client";
//The glue layer between React and Apollo
import { ApolloProvider } from "react-apollo";
import SongList from "./SongList";
import SongCreate from "./SongCreate";
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "network-only",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all"
  }
};
const client = new ApolloClient({ defaultOptions });
const App = props => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <div>
          <Route exact path="/" component={SongList} />
          <Route path="/songs/new" component={SongCreate} />
        </div>
      </HashRouter>
    </ApolloProvider>
  );
};

export default App;
