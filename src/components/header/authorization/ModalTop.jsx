import React from 'react'
import styles from './Authorization.module.css'
import ClearIcon from '@material-ui/icons/Clear'
import { useDispatch } from 'react-redux'
import { closeWindow } from '../../../redux/ducks/header'

function ModalTop () {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(closeWindow())
  }
  return (
    <div className={styles.header}>
      <button className={styles.close} onClick={handleClick}>
        <ClearIcon />
      </button>
    </div>
  )
}

export default ModalTop