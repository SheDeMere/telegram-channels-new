import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header/index';
import Channels from './Channels/Channels';
import Channel from './Channel/Channel';
import Categories from './Categories';


function App() {
  return (
    <div className="container">
      <Header />
      <Categories />
      <Switch>
        <Route path="/">
          <Channels />
          <Route exact path="/:id">
            <Channel />
          </Route>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
