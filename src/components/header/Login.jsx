import React from 'react';
import styles from './Header.module.css';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart, openWindow } from '../../redux/ducks/header';
import { Link } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';
function Login() {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.header.name);

  const login = useSelector((state) => state.header.token);

  const handleClick = () => {
    dispatch(openWindow());
  };

  const logout = () => {
    dispatch(logoutStart());
  };

  useHotkeys('ctrl + l', () => {
    logout();
  });
  return (
    <div className={styles.users}>
      {userName === '' ? (
        <p className={styles.userName}>Вы вошли как гость</p>
      ) : (
        <p className={styles.userName}>Вы вошли как {userName}</p>
      )}
      {login === null ? (
        <Link to="/login">
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
            className={styles['login_button']}
          >
            ВOЙТИ
          </Button>
        </Link>
      ) : (
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
          className={styles['login_button']}
        >
          ВЫЙТИ
        </Button>
      )}
    </div>
  );
}

export default Login;
