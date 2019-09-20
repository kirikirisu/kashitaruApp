const connectToRoom = (id = 'b4bb7dfe-4125-4099-86a3-748b8ba8e726', props) => {
  const {
    currentUser,
    initializeMessage,
    setRooms,
    setRoomUsers,
    setRoomName,
    setCurrentRoom,
  } = props;

  initializeMessage();

  return currentUser
    .subscribeToRoom({
      roomId: `${id}`,
    })
    .then((currentRoom) => {
      const roomName =
        currentRoom.customData && currentRoom.customData.isDirectMessage
          ? currentRoom.customData.userIds.filter(
            (elemId) => elemId !== currentUser.id,
          )[0]
          : currentRoom.name;

      setCurrentRoom(currentRoom);
      setRoomUsers(currentRoom.users);
      setRooms(currentUser.rooms);
      setRoomName(roomName);
    })
    .catch(console.error);
};

export default connectToRoom;
