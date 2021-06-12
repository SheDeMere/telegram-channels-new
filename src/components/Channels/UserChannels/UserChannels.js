import React from 'react'
import styles from './UserChannels.module.css'

function UserChannels (props) {
  return (
    <div className={styles.channel}>
      <div className={styles.channel_name}>Топор</div>
      <div className={styles.channel_details}>
        <div className={styles.channel_img}>
          <img
            src="https://c.tcdn.co/0d2/764/0d27643e-e45e-11e9-b0ff-96000024ad61/channel256.png"
            alt=""
          />
        </div>
        <div className={styles.channel_description}>
          <div className={styles.channel_title}>Развлекательные видео</div>
          <span className={styles.channel_link}>@topor-video</span>
          <span className={styles.channel_subscribers}>1.6 m</span>
        </div>
      </div>
    </div>
  )
}

export default UserChannels