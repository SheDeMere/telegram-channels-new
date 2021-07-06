import React from 'react';
import styles from './AddChannels.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ClearIcon from '@material-ui/icons/Clear';
import AddChannelInput from './AddChannelInput';
import { closeModal } from '../../../redux/ducks/categories';
function AddChannels() {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.categories.modalWindow);

  const handleClick = () => {
    dispatch(closeModal());
  };
  return (
    modal && (
      <div className={styles['modal_back']}>
        <div className={styles.modal}>
          <button className={styles.close} onClick={handleClick}>
            <ClearIcon />
          </button>
          <div className={styles.forms}>
            <h3>Добавить канал</h3>
            <AddChannelInput />
          </div>
        </div>
      </div>
    )
  );
}

export default AddChannels;
