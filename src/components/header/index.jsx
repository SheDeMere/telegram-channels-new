import React from 'react';
import Logo from './Logo'
import Login from './Login'
import styles from './Header.module.css'
import Authorization from './authorization'
function Header(props) {
  return (
    <div className={styles.header}>
      <Logo />
      <Login />
      <Authorization />
    </div>
  );
}


export default Header;
