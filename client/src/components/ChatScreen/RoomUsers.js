import React from 'react';
import connectToRoom from '../../utils/connectToRoom';

const RoomUsers = ({
  roomUsers,
  currentUser,
  rooms,
  rest,
}) => {
  const createPrivateRoom = (id) => {
    const roomName = `${currentUser.id}_${id}`;

    const isPrivateChatCreated = rooms.filter((room) => {
      if (room.customData && room.customData.isDirectMessage) {
        const arr = [currentUser.id, id];
        const { userIds } = room.customData;

        if (arr.sort().join('') === userIds.sort().join('')) {
          return {
            room,
          };
        }
      }

      return false;
    });

    if (isPrivateChatCreated.length > 0) {
      return Promise.resolve(isPrivateChatCreated[0]);
    }

    return currentUser.createRoom({
      name: `${roomName}`,
      private: true,
      addUserIds: [`${id}`],
      customData: {
        isDirectMessage: true,
        userIds: [currentUser.id, id],
      },
    });
  };

  const sendDM = (id) => {
    createPrivateRoom(id).then((room) => {
      connectToRoom(room.id, currentUser, rest);
    });
  };

  const users = roomUsers.map((user) => {
    return (
      <li className="room-member" key={user.id}>
        <div>
          <span className={`presence ${user.presence.state}`} />
          <span>{user.name}</span>
        </div>
        {currentUser.id !== user.id ? (
          // eslint-disable-next-line react/button-has-type
          <button
            onClick={() => sendDM(user.id)}
            title={`Send ${user.name} a direct message`}
            className="send-dm"
          >
            +
          </button>
        ) : null}
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
