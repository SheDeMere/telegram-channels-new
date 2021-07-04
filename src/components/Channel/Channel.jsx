import React from 'react';
import { useParams } from 'react-router-dom';
import ChannelInfo from './ChannelInfo/ChannelInfo';

function Channel() {
  const channelId = parseInt(useParams().id);
  if (!channelId) {
    return <div />;
  } else return <ChannelInfo channelId={channelId} />;
}

export default Channel;
