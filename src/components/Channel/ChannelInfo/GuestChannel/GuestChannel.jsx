import React, { useState } from 'react';
import styles from './GuestChannel.module.css';
import { Link } from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'

function GuestChannel(props) {
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
              <div className={styles.channel_wrap}>
                <div className={styles.channel_info}>
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
                      <Rating name="read-only" value={props.rating} readOnly />
                    </Box>
                  </div>
                </div>
                <div className={styles.channel_reviews}>
                  <div className={styles.reviews_title}>Отзывы:</div>
                  {props.reviews.map((item) => {
                    return (
                      <div className={styles.review_wrap}>
                        <span className={styles.review_name}>{item.name}:</span>
                        <span className={styles.review_text}>{item.text}</span>
                      </div>
                    );
                  })}
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
  );
}

export default GuestChannel;
