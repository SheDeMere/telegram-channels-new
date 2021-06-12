import React, { useState } from 'react'
import styles from './Authorization.module.css'
import ModalTop from './ModalTop'
import logo from '../assets/logo.jpg'
import Inputs from './Inputs'
import { useSelector } from 'react-redux'

function Authorization () {

  const modal = useSelector(state => state.header.modalWindow)

  return (modal &&
    <div className={styles['modal_back']}>
      <div className={styles.modal}>
        <ModalTop />
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles['logo_img']}/>
        </div>
        <Inputs />
      </div>
    </div>
  )
}

export default Authorization