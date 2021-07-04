import React, { useState } from 'react';
import styles from './AdminChannel.module.css';
import { Link, useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';
import { openDeleteChannelModal } from '../../../../redux/ducks/cards';
import { useDispatch, useSelector } from 'react-redux';
import DeleteChannel from './deleteChannels';
import { addReview, deleteReview } from '../../../../redux/ducks/reviews';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { PropTypes } from 'prop-types'

function AdminChannel(props) {
  const dispatch = useDispatch();

  const id = parseInt(useParams().id);

  const [modal, setModal] = useState(true);

  const [text, setText] = useState('');

  const userName = useSelector((state) => {
    return state.header.name;
  });
  const addingReview = useSelector((state) => {
    return state.reviews.addingReview;
  });
  const deletingReview = useSelector((state) => {
    return state.reviews.deletingReview;
  });
  const showDeleteChannelModal = useSelector((state) => {
    return state.cards.showDeleteChannelModal;
  });

  const handleAddReview = (channelId, text, userName) => {
    dispatch(addReview(channelId, text, userName));
  };

  const handleDeleteReview = (id) => {
    dispatch(deleteReview(id));
  };

  const channel = props.channel && props.channel


  const handleOpenDeleteChannelModal = (showDeleteChannelModal) => {
    dispatch(openDeleteChannelModal(showDeleteChannelModal));
  };

  if (showDeleteChannelModal) {
    return <DeleteChannel />;
  } else
    return (
      <div>
        <div
          className={`${styles.modal} ${styles.show} ${
            modal ? '' : styles.close
          }`}
        >
          <Link to="/">
            <button
              className={styles.modal_btn}
              onClick={() => setModal(false)}
            >
              ✕
            </button>
          </Link>
          <div className={styles.channel_card}>
            {channel.map((channel) => {
              return (
                <div>
                  <div className={styles.channel_settings}>
                    <button
                      className={styles.channel_delete}
                      onClick={() =>
                        handleOpenDeleteChannelModal(showDeleteChannelModal)
                      }
                    >
                      <DeleteIcon />
                    </button>
                    <Link to={`/edit/${id}?`}>
                      <button className={styles.channel_edit}>
                        {' '}
                        <EditIcon />{' '}
                      </button>
                    </Link>
                  </div>
                  <div className={styles.channel_wrap}>
                    <div className={styles.channel_info}>
                      <div className={styles.channel_name}>{channel.name}</div>
                      <div className={styles.channel_img}>
                        <img src={channel.imgUrl} alt="" />
                      </div>
                      <div className={styles.channel_rating}>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
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
                            <div>
                              <span className={styles.review_name}>
                                {item.name}:
                              </span>
                              <span className={styles.review_text}>
                                {item.text}
                              </span>
                            </div>
                            <button
                              disabled={deletingReview}
                              className={styles.review_delete_btn}
                              onClick={() => handleDeleteReview(item.id)}
                            >
                              ❌
                            </button>
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

AdminChannel.propTypes = {
  channel: PropTypes.array.isRequired
}

export default AdminChannel;
