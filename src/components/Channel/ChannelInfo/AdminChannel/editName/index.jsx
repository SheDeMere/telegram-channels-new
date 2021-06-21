import React, { useState } from 'react';
import styles from './Edit.module.css';
import { Button, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editChannel } from '../../../../../redux/ducks/cards';

function EditName(props) {
  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [link, setLink] = useState('');
  const [followers, setFollowers] = useState('');
  const [desk, setDesk] = useState('');

  const handleClick = () => {
    dispatch(editChannel(name, login, link, followers, desk, id));
  };

  return (
    <div className={styles['modal_back']}>
      <div className={styles.modal}>
        <Link to="/">
          <ClearIcon className={styles.close} />
        </Link>
        <div className={styles.forms}>
          <h3>Редактировать</h3>
          <div>
            <div className={styles.input}>
              <TextField
                className={styles.inputForm}
                id="outlined-basic"
                label="Название канала"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <TextField
                className={styles.inputForm}
                id="outlined-basic"
                label="Логин"
                variant="outlined"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <TextField
                className={styles.inputForm}
                id="outlined-basic"
                label="Ссылка на фотографию"
                variant="outlined"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <TextField
                className={styles.inputForm}
                id="outlined-basic"
                label="Количество подписчиков"
                variant="outlined"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
              />
            </div>
            <div className={styles.input}>
              <TextField
                id="outlined-multiline-static"
                label="Описание канала"
                multiline
                rows={4}
                fullWidth={50}
                variant="outlined"
                value={desk}
                onChange={(e) => setDesk(e.target.value)}
              />
            </div>
          </div>
          <Button variant="outlined" color="primary" onClick={handleClick}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditName;
