import React from 'react';
import { useSelector } from 'react-redux';
import UserChannel from './UserChannel/UserChannel';
import AdminChannel from './AdminChannel/AdminChannel';
import GuestChannel from './GuestChannel/GuestChannel';

function ChannelInfo(props) {
  const channels = useSelector((state) => {
    return state.cards.items;
  });
  const channel = channels.filter((channel) => {
    return channel.id === props.channelId;
  });

  const auth = useSelector((state) => {
    return state.header;
  });

  if (auth.user) {
    return <UserChannel channel={channel}/>;
  }
  if (auth.admin) {
    return <AdminChannel channel={channel}/>;
  }
  return <GuestChannel channel={channel} />;
}

export default ChannelInfo;
