import { connect } from 'react-redux';
import RoomUsers from '../Component/chatScreenComponent/RoomUsers';
import {
  initializeMessage,
  setRooms,
  setRoomUsers,
  setRoomName,
  setCurrentRoom,
  onMessages,
  onPresenceChanged,
} from '../actions/index';

const mapStateToProps = ({ chat }) => ({
  roomUsers: chat.roomUsers,
  currentUser: chat.currentUser,
  rooms: chat.rooms,
});

const mapDispatchToProps = (dispatch) => ({
  onMessages(message) {
    dispatch(onMessages(message));
  },
  initializeMessage() {
    dispatch(initializeMessage());
  },
  setRooms(rooms) {
    dispatch(setRooms(rooms));
  },
  setRoomUsers(roomUser) {
    dispatch(setRoomUsers(roomUser));
  },
  setRoomName(roomName) {
    dispatch(setRoomName(roomName));
  },
  setCurrentRoom(currentRoom) {
    dispatch(setCurrentRoom(currentRoom));
  },
  onPresenceChanged(currentRoom) {
    dispatch(onPresenceChanged(currentRoom));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomUsers);
