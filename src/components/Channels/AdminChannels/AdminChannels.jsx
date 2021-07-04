import React from 'react';
import styles from './AdminChannels.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

function AdminChannels(props) {
  const preloader = useSelector((state) => state.cards.loading);

  const channels = props.channels && props.channels;
  return preloader ? (
    <div className={styles.preloader}>
      <ReactLoading type="spin" color="#7373ff" height={80} width={80} />
    </div>
  ) : (
    <div className={styles.channel_block}>
      {channels.map((channel) => {
        return (
          <Link to={`/${channel.id}`}>
            <div className={styles.channel}>
              <div className={styles.channel_name}>{channel.name}</div>
              <div className={styles.channel_details}>
                <div className={styles.channel_img}>
                  <img src={channel.imgUrl} alt="" />
                </div>
                <div className={styles.channel_description}>
                  <div className={styles.channel_title}>{channel.desk}</div>
                  <span className={styles.channel_link}>
                    {channel.channelLogin}
                  </span>
                  <span className={styles.channel_subscribers}>
                    {channel.followers}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

AdminChannels.propTypes = {
  channels: PropTypes.array.isRequired,
};

export default AdminChannels;
