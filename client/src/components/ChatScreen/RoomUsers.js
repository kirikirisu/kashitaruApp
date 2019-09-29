import React from 'react';

const RoomUsers = ({
  roomUsers,
}) => {
  const users = roomUsers.map((user) => {
    return (
      <li className="room-member" key={user.id}>
        <div>
          <span className={`presence ${user.presence.state}`} />
          <span>{user.name}</span>
        </div>
      </li>
    );
  });

  return (
    <div className="room-users">
      <ul>{users}</ul>
    </div>
  );
};

export default RoomUsers;
