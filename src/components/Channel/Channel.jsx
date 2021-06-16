import React from 'react'
import { useParams } from 'react-router-dom'
import ChannelInfo from './ChannelInfo/ChannelInfo'

function Channel (props) {
  const channelId = parseInt(useParams().id);

  if(!channelId) {
   return <div/>
  }
  else return (
    <div>
    <ChannelInfo channelId={channelId}/>
    </div>
  )
}

export default Channel