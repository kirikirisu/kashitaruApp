const connectToRoom = (id, currentUser, props) => {
  const {
    initializeMessage,
    setRooms,
    setRoomUsers,
    setRoomName,
    setCurrentRoom,
    onMessages,
    onPresenceChanged, // ここまでアクション
    currentRoom,
  } = props;

  initializeMessage();

  return currentUser
    .subscribeToRoom({
      roomId: `${id}`,
      messageLimit: 100,
      hooks: {
        onMessage: (message) => {
          onMessages(message);
        },
        onPresenceChanged: () => {
          if (!currentRoom === null) {
            onPresenceChanged(currentRoom);
          }
        },
      },
    })
    .then((returnedCurrentRoom) => {
      const roomName = returnedCurrentRoom.customData && returnedCurrentRoom.customData.isDirectMessage
        ? returnedCurrentRoom.customData.userIds.filter(
          (elemId) => elemId !== currentUser.id,
        )[0]
        : returnedCurrentRoom.name;

      setCurrentRoom(returnedCurrentRoom);
      setRoomUsers(returnedCurrentRoom.users);
      setRooms(currentUser.rooms);
      setRoomName(roomName);
    })
    .catch(console.error);
};

export default connectToRoom;
