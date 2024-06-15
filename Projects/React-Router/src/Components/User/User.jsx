import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {id} = useParams();
  return <div className=" bg-purple-600 text-yellow-400 text-center text-3xl font-extrabold">User is {id}</div>;
}

export default User;
