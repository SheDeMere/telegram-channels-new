import React, { useState } from 'react';
import styles from '../../Channel/ChannelInfo/AdminChannel/editChannels/Edit.module.css';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addChannel } from '../../../redux/ducks/cards';
import { useHotkeys } from 'react-hotkeys-hook';
import { addRating } from '../../../redux/ducks/ratings'

function AddChannelInput() {
  const dispatch = useDispatch();

  const [info, setInfo] = useState(false);

  const [name, setName] = useState('');

  const [login, setLogin] = useState('');

  const [link, setLink] = useState('');

  const [followers, setFollowers] = useState('');

  const [desk, setDesk] = useState('');

  const [category, setCategory] = useState();

  const [reviews, setReviews] = useState();

  const dataChannel = useSelector((state) => state.cards.items);

  const itemsId = dataChannel.map((items) => {
      return items.id;
    });

  const id = itemsId && itemsId[itemsId.length - 1] + 1;

  const handleClick = () => {
    setInfo(true);
    dispatch(addRating(id, reviews));
    dispatch(addChannel(id, category, name, login, link, followers, desk));
  };
  useHotkeys(
    'enter',
    () => {
      handleClick();
    },
    { enableOnTags: ['INPUT'] },
  );

  return (
    <div>
      <div>
        <div className={styles.input}>
          <TextField
            className={styles.inputForm}
            id="outlined-basic"
            label="Категория"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
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
            className={styles.inputForm}
            id="outlined-basic"
            label="Оценка"
            variant="outlined"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
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
        {info ? (
          <p style={{ color: 'green', opacity: '0.8', fontWeight: 300 }}>
            Канал успешно добавлен!
          </p>
        ) : (
          ''
        )}
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default AddChannelInput;
