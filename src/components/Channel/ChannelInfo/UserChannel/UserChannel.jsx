import React, { useState } from 'react';
import styles from './UserChannel.module.css';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../../../redux/ducks/reviews';
import PropTypes from 'prop-types'


function UserChannel(props) {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(true);

  const [text, setText] = useState('');

  const userName = useSelector((state) => {
    return state.header.name;
  });
  const addingReview = useSelector((state) => {
    return state.reviews.addingReview;
  });

  const handleAddReview = (channelId, text, userName) => {
    dispatch(addReview(channelId, text, userName));
  };

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
                  <form className={styles.review_form}>
                    <input
                      type="text"
                      placeholder={'Оставьте отзыв'}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                    <Link to={`/${channel.id}`}>
                      <button
                        disabled={addingReview}
                        className={styles.review_btn}
                        onClick={() =>
                          handleAddReview(channel.id, text, userName)
                        }
                      >
                        ➤
                      </button>
                    </Link>
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
  );
}

UserChannel.propTypes = {
  channel: PropTypes.array.isRequired
}
export default UserChannel;
