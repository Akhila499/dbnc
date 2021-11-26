import React from "react";
import RoomItem from "./RoomItem";
const rooms = require("./rooms.json");

const Question1 = () => {
  const data = rooms.map((room) => <RoomItem room={room} />);
  return (
    <div>
      <ol>{<RoomItem />}</ol>
    </div>
  );
};

export default Question1;
