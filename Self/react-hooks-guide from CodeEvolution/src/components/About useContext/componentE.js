import React, { useContext } from "react";
import { ChannelContext, UserContext } from "../../App";
import ComponentF from "./componentF";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <ComponentF />
      <h6>
        {user} - {channel}
      </h6>
    </div>
  );
}

export default ComponentE;
