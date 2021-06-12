
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from './header/index'
import Channels from './Channels/Channels'

function App() {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Channels/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
