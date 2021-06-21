import React, { useEffect, useState } from 'react'
import styles from './Edit.module.css'
import { Button, TextField } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editChannel, selectedChannel } from '../../../../../redux/ducks/cards'

function Inputs (props) {
  const id = parseInt(useParams().id);

  const dispatch = useDispatch();

  const data = useSelector(state => state.cards.selectedChannel)

  const handleClick = () => {
    dispatch(editChannel(category ,name, login, link, followers, desk, id));
  };

  const [name, setName] = useState(data.name);

  const [login, setLogin] = useState(data.channelLogin);

  const [link, setLink] = useState(data.imgUrl);

  const [followers, setFollowers] = useState(data.followers);

  const [desk, setDesk] = useState(data.desk);

  const [category, setCategory] = useState(data.categoryId);

  useEffect(() => {
    dispatch(selectedChannel(id))
  }, [dispatch])

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
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Сохранить
        </Button>
      </div>
    </div>
  )
}

export default Inputs