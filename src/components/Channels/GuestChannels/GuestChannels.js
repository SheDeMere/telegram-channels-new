import React from 'react';
import styles from './GuestChannels.module.css';
import { Link } from 'react-router-dom';

function GuestChannels(props) {
  const randomChannel =
    props.channels[Math.floor(Math.random() * props.channels.length)];

  if (randomChannel === undefined) {
    return false;
  }

  return (
    <div className={styles.channel_block}>
      <Link to={`/${randomChannel.id}`}>
        <div className={styles.channel}>
          <div className={styles.channel_name}>{randomChannel.name}</div>
          <div className={styles.channel_details}>
            <div className={styles.channel_img}>
              <img src={randomChannel.imgUrl} alt="" />
            </div>
            <div className={styles.channel_description}>
              <div className={styles.channel_title}>{randomChannel.desk}</div>
              <span className={styles.channel_link}>
                {randomChannel.channelLogin}
              </span>
              <span className={styles.channel_subscribers}>
                {randomChannel.followers}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default GuestChannels;
