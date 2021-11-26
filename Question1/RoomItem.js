import React from "react";

const RoomItem = () => {
  const { room } = props;

  return (
    <>
      <li>
        {room.room_type}, {room.vacant_rooms},'$'{room.price}
      </li>
    </>
  );
};

export default RoomItem;
