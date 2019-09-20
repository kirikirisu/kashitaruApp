import React from 'react';
import connectToRoom from '../../utils/connectToRoom';

const RoomList = (props) => {
  const {
    rooms,
    currentRoom,
    currentUser,
  } = props;
  console.log(props);

  const roomList = rooms.map((room) => {
    const roomIcon = !room.isPrivate ? '🌐' : '🔒';
    const isRoomActive = room.id === currentRoom.id ? 'active' : '';

    return (
      <li
        className={isRoomActive}
        key={room.id}
        onClick={() => connectToRoom(room.id, props)}
      >
        <span className="room-icon">{roomIcon}</span>
        {room.customData && room.customData.isDirectMessage ? (
          <span className="room-name">
            {room.customData.userIds.filter((id) => id !== currentUser.id)[0]}
          </span>
        ) : (
            <span className="room-name">{room.name}</span>
          )}
      </li>
    );
  });

  return (
    <div className="rooms">
      <ul className="chat-rooms">{roomList}</ul>
    </div>
  );
};

export default RoomList;
