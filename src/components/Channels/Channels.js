import React from "react";
import GuestChannels from "./GuestChannels/GuestChannels";


function Channels(props) {
  return (
    <div>

      {/*тут будет условие, где будут выводиться либо GuestChannels, либо UserChannels*/}

      <GuestChannels />
      {/*<UserChannels/>*/}
    </div>
  );
}

export default Channels;
