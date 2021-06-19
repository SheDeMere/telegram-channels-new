import React from 'react';
import Logo from './Logo'
import Login from './Login'
import styles from './Header.module.css'
import Authorization from './authorization'
import { Route } from 'react-router-dom'
function Header(props) {
  return (
    <div className={styles.header}>
      <Logo />
      <Login />
      <Route path='/login'>
        <Authorization />
      </Route>
    </div>
  );
}


export default Header;
