
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './header/index'
import Channels from './Channels/Channels'
import Channel from './Channel/Channel'

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route path="/:id?">
          <Channels/>
          <Channel/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
