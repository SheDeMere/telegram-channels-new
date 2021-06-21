import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserChannel from './UserChannel/UserChannel';
import AdminChannel from './AdminChannel/AdminChannel';
import GuestChannel from './GuestChannel/GuestChannel';
import { loadComments, loadRatings } from '../../../redux/ducks/cards'

function ChannelInfo(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRatings(props.channelId));
  }, [dispatch]);
  useEffect(()=>{
    dispatch(loadComments(props.channelId))
  }, [dispatch]);

  const channels = useSelector((state) => {
    return state.cards.items;
  });
  const channel = channels.filter((channel) => {
    return channel.id === props.channelId;
  });
  const rating = useSelector((state) => {
    return state.cards.ratings;
  });

  const comments = useSelector((state)=>{
    return state.cards.comments
  });

  const auth = useSelector((state) => {
    return state.header;
  });

  if (auth.user) {
    return <UserChannel channel={channel} rating={rating} comments={comments}/>;
  }
  if (auth.admin) {
    return <AdminChannel channel={channel} rating={rating} comments={comments}/>;
  }
  return <GuestChannel channel={channel} rating={rating} comments={comments}/>;
}

export default ChannelInfo;
