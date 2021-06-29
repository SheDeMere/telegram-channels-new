import React from 'react';
import Logo from './Logo'
import Login from './Login'
import styles from './Header.module.css'
import Authorization from './authorization'
import { Route, Switch } from 'react-router-dom'
import EditName from '../Channel/ChannelInfo/AdminChannel/editChannels'

function Header(props) {
  return (
    <div className={styles.header}>
      <Logo />
      <Login />
      <Switch>
        <Route path='/login'>
          <Authorization />
        </Route>
        <Route path='/edit/:id?'>
          <EditName />
        </Route>
      </Switch>
    </div>
  );
}


export default Header;
