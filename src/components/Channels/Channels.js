import React, { useEffect } from 'react';
import GuestChannels from './GuestChannels/GuestChannels';
import { useDispatch, useSelector } from 'react-redux';
import { loadChannels } from '../../redux/ducks/cards';
import UserChannels from './UserChannels/UserChannels';
import AdminChannels from './AdminChannels/AdminChannels'
import { Route } from 'react-router-dom'
import EditName from '../Channel/ChannelInfo/AdminChannel/editName'

function Channels(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChannels());
  }, [dispatch]);

  const auth = useSelector((state) => {
    return state.header;
  });
  const channels = useSelector((state) => {
    return state.cards.items
  });

  if (auth.user) {
    return <UserChannels channels={channels}/>;
  }
  if(auth.admin) {
    return <AdminChannels channels={channels}/>
  }
  return <GuestChannels channels={channels} />;

}

export default Channels;

