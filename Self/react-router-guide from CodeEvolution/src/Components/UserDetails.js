import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  /*
  const params = useParams();
  const userId = params.userid;
  return <div>User {userId} Details</div>;
  */
  //  Note: Or we can use destructuring.
  const { userid } = useParams();
  return <div>User {userid} Details</div>;
};
