import { connect } from 'react-redux';
import RoomList from '../Component/chatScreenComponent/RoomList';
import {
  setMessages,
  initializeMessage,
  setRooms,
  setRoomUsers,
  setRoomName,
  setCurrentRoom,
} from '../actions/index';

const mapStateToProps = ({ chat }) => ({
  rooms: chat.rooms,
  currentRoom: chat.currentRoom,
  currentUser: chat.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setMessages(message) {
    dispatch(setMessages(message));
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
