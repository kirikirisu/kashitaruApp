import { connect } from 'react-redux';
import RoomList from '../Component/chatScreenComponent/RoomList';
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
  rooms: chat.rooms,
  currentRoom: chat.currentRoom,
  currentUser: chat.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setMessages(message) {
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
