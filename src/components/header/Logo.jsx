import React from 'react';
import logo from './assets/logo.jpg';
import styles from './Header.module.css'
function Logo(props) {
  return (
    <div className={styles.logo}>
      <div>
        <img src={logo} alt="logo" className={styles['logo_img']} />
      </div>
      <div>
        <p className={styles['logo_text']}>CHANNELS</p>
      </div>
    </div>
  );
}

export default Logo;
