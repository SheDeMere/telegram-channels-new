import React, { useState } from 'react'
import styles from './Header.module.css';
import { Button } from '@material-ui/core';
import Authorization from './authorization'
import { useDispatch, useSelector } from 'react-redux'
import { logoutStart, openWindow } from '../../redux/ducks/header'
function Login(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openWindow())
  }

  const userName = useSelector(state => state.header.name);

  const login = useSelector(state => state.header.token);

  const logout = () => {
    dispatch(logoutStart())
  }

  return (
    <div className={styles.users}>
      {userName === "" ? <p className={styles.userName}>Вы вошли как гость</p>
        :
        <p className={styles.userName}>Вы вошли как {userName}</p>
      }
      {login === null?
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
          ВOЙТИ
        </Button>
        :
        <Button
          onClick={logout}
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
          ВЫЙТИ
        </Button>

      }
    </div>
  );
}

export default Login;
