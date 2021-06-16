import React, { useState } from 'react';
import styles from './GuestChannel.module.css';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function GuestChannel(props) {
  const [value, setValue] = React.useState(3);

  const [modal, setModal] = useState(true);
  return (
    <div>
      <div
        className={`${styles.modal} ${styles.show} ${
          modal ? '' : styles.close
        }`}>
        <Link to="/">
          <button className={styles.modal_btn} onClick={() => setModal(false)}>
            ✕
          </button>
        </Link>
        <div className={styles.channel_card}>
          {props.channel.map((channel)=>{
            return (
              <div>
              <div className={styles.channel_name}>
                {channel.name}
              </div>
              <div className={styles.channel_img}>
                <img src={channel.imgUrl} alt=""/>
              </div>
                <div className={styles.channel_rating}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography className={styles.rating_title} component="legend">Рейтинг канала:</Typography>
                    <Rating name="read-only" value={value} readOnly />
                  </Box>
                </div>
                <div className={styles.channel_reviews}>
                  <div className={styles.reviews_title}>Отзывы:</div>
                  <div>Тут будут отзывы</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className={`${styles.modal_bg} ${styles.show} ${
          modal ? '' : styles.close
        } `}
      />
    </div>
  );
}

export default GuestChannel;
