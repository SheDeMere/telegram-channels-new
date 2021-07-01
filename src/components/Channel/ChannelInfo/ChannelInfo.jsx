import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserChannel from './UserChannel/UserChannel';
import AdminChannel from './AdminChannel/AdminChannel';
import GuestChannel from './GuestChannel/GuestChannel';
import { selectedChannel, selectedReviews } from '../../../redux/ducks/cards'
import { loadRatings } from '../../../redux/ducks/ratings';
import { loadReviews } from '../../../redux/ducks/reviews';

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
    dispatch(selectedReviews(props.channelId))

  }, [dispatch])

  const channels = useSelector((state) => {
    return state.cards.items;
  });

  const channel = channels.filter((channel) => {
    return channel.id === props.channelId;
  });
  const rating = useSelector((state) => {
    return state.ratings.items;
  });

  const reviews = useSelector((state)=>{
    return state.reviews.items
  });

  const auth = useSelector((state) => {
    return state.header;
  });

  const ratingsLoading = useSelector(state => {
    return state.ratings.loading
  });
  const reviewsLoading = useSelector(state => {
    return state.reviews.loading
  })

  if(reviewsLoading || ratingsLoading) {
    return <div/>
  }
  if (auth.user) {
    return <UserChannel channel={channel} rating={rating} reviews={reviews}/>;
  }
  if (auth.admin) {
    return <AdminChannel channel={channel} rating={rating} reviews={reviews}/>;
  }
  return <GuestChannel channel={channel} rating={rating} reviews={reviews}/>;
}


export default ChannelInfo;
