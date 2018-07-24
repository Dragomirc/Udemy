import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import SongList from "./SongList";
import SongCreate from "./SongCreate";
import SongDetail from "./SongDetail";

const App = props => (
  <div className="container">
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path="/songs/new" component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
