import React, { useState } from 'react'
import styles from './AdminChannel.module.css'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Rating } from '@material-ui/lab'

function AdminChannel (props) {
  const [value, setValue] = React.useState(3);

  const [modal, setModal] = useState(true);
  return (
    <div>
      <div
        className={`${styles.modal} ${styles.show} ${
          modal ? '' : styles.close
        }`}
      >
        <Link to="/">
          <button className={styles.modal_btn} onClick={() => setModal(false)}>
            ✕
          </button>
        </Link>
        <div className={styles.channel_card}>
          {props.channel.map((channel) => {
            return (
              <div>
                <div className={styles.channel_settings}>
                  <button className={styles.channel_delete}>Удалить канал</button>
                  <button className={styles.channel_edit}>Изменить канал</button>
                </div>
                <div className={styles.channel_name}>{channel.name}</div>
                <div className={styles.channel_img}>
                  <img src={channel.imgUrl} alt="" />
                </div>
                <div className={styles.channel_rating}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography
                      className={styles.rating_title}
                      component="legend"
                    >
                      Рейтинг канала:
                    </Typography>
                    <Rating name="read-only" value={value} readOnly />
                  </Box>
                </div>
                <div className={styles.channel_reviews}>
                  <div className={styles.reviews_title}>Отзывы:</div>
                  <div>Тут будут отзывы</div>
                  <form className={styles.review_form}>
                    <input type="text" placeholder={'Оставьте отзыв'} />
                    <button className={styles.review_btn}>➤</button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.modal_bg} ${styles.show} ${
          modal ? '' : styles.close
        } `}
      />
    </div>
  )
}

export default AdminChannel