import React, { useState } from 'react';
import styles from './DeleteChannel.module.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  closeDeleteChannelModal,
  deleteChannel,
} from '../../../../../redux/ducks/cards';

function DeleteChannel() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(true);

  const channelId = parseInt(useParams().id);

  const handleDeleteChannel = (channelId) => {
    dispatch(deleteChannel(channelId));
  };

  const handleCloseDeleteChannelModal = () => {
    dispatch(closeDeleteChannelModal());
  };

  return (
    <div>
      <div
        className={`${styles.modal} ${styles.show} ${
          modal ? '' : styles.close
        }`}
      >
        <Link to={`/${channelId}`}>
          <button
            className={styles.modal_btn}
            onClick={() => handleCloseDeleteChannelModal()}
          >
            ✕
          </button>
        </Link>
        <div className={styles.delete_window}>
          <div className={styles.delete_title}>
            Вы действительно хотите удалить этот канал?
          </div>
          <Link to={'/'}>
            <button
              className={styles.delete_btn}
              onClick={() => handleDeleteChannel(channelId)}
            >
              Удалить
            </button>
          </Link>
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

export default DeleteChannel;
