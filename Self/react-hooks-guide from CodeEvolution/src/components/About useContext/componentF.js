import React from "react";
import { ChannelContext, UserContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <>
                    <h5>User Context value is: {user}</h5>
                    <h5>Channel Context value is: {channel}</h5>
                  </>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
