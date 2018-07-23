import React from "react";
import { HashRouter, Route } from "react-router-dom";
import SongList from "./SongList";
import SongCreate from "./SongCreate";

const App = props => (
  <div className="container">
    <HashRouter>
      <div>
        <Route exact path="/" component={SongList} />
        <Route path="/songs/new" component={SongCreate} />
      </div>
    </HashRouter>
  </div>
);

export default App;
