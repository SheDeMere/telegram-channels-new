import React, { useState } from 'react'
import styles from './Header.module.css';
import { Button } from '@material-ui/core';
import Authorization from './authorization'
import { useDispatch } from 'react-redux'
import { openWindow } from '../../redux/ducks/header'
function Login(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openWindow())
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        variant="outlined"
        style={{
          border: 'solid 1px #2096D4',
          borderRadius: 16,
          color: '#2096D4',
          background: '00000',
          fontWeight: 300,
        }}
        className={styles.login_button}
      >
        ВОЙТИ
      </Button>
    </div>
  );
}

export default Login;
