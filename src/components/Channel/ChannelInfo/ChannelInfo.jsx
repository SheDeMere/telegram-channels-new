import React from 'react'
import {useSelector } from 'react-redux'
import UserChannel from './UserChannel/UserChannel'
import AdminChannel from './AdminChannel/AdminChannel'
import GuestChannel from './GuestChannel/GuestChannel'


function ChannelInfo (props) {

  const auth = useSelector((state) => {
    return state.header;
  });


  if (auth.user) {
    return <UserChannel/>;
  }
  if(auth.admin) {
    return <AdminChannel/>
  }
  return <GuestChannel/>;
}

export default ChannelInfo
