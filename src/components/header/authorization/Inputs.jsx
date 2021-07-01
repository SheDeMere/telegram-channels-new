import { Button, TextField } from '@material-ui/core';
import styles from './Authorization.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { setAuth } from '../../../redux/ducks/header'

function Inputs(props) {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');

  const [pass, setPass] = useState('');

  const error = useSelector((state) => state.header.error);

  const sendData = () => {
    dispatch(setAuth(login, pass))
  }

  return (
    <div className={styles['inputs_group']}>
      <div>
        <TextField
          id="outlined-basic"
          label="Логин"
          variant="outlined"
          className={styles.input}
          value={login}
          onChange={e => setLogin(e.target.value)}
          style={{ marginBottom: 30 }}
        />
        <TextField
          id="outlined-basic"
          label="Пароль"
          variant="outlined"
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className={styles.input}
        />
        {error ? <p className={styles.error}>Неправильный логин или пароль</p> : ''}
        <Button
          variant="outlined"
          style={{
            border: 'solid 1px #2096D4',
            color: '#2096D4',
            background: '00000',
            fontWeight: 300,
            marginTop: 40
          }}
          onClick={sendData}
        >
          ВОЙТИ
        </Button>
      </div>
    </div>
  );
}

export default Inputs;
