import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserChannel from './UserChannel/UserChannel';
import AdminChannel from './AdminChannel/AdminChannel';
import GuestChannel from './GuestChannel/GuestChannel';
import { loadRatings, loadReviews, selectedChannel } from '../../../redux/ducks/cards'
import DeleteChannel from './AdminChannel/deleteChannels'
import { Route } from 'react-router-dom'

function ChannelInfo(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRatings(props.channelId));
  }, [dispatch]);
  useEffect(()=>{
    dispatch(loadReviews(props.channelId))
  }, [dispatch]);
  useEffect(() => {
    dispatch(selectedChannel(props.channelId))
  }, [dispatch])

  const channels = useSelector((state) => {
    return state.cards.items;
  });
  const channel = channels.filter((channel) => {
    return channel.id === props.channelId;
  });
  const rating = useSelector((state) => {
    return state.cards.ratings;
  });

  const reviews = useSelector((state)=>{
    return state.cards.reviews
  });

  const auth = useSelector((state) => {
    return state.header;
  });

  if (auth.user) {
    return <UserChannel channel={channel} rating={rating} reviews={reviews}/>;
  }
  if (auth.admin) {
    return <AdminChannel channel={channel} rating={rating} reviews={reviews}/>;
  }
  return <GuestChannel channel={channel} rating={rating} reviews={reviews}/>;
}

export default ChannelInfo;
