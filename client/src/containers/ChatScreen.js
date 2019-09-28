import { connect } from 'react-redux';
import ChatScreen from '../components/ChatScreen/index';
import {
  initializeNewMessage,
  setNewMessage,
  initializeMessage, // ここからconnectToRoom用
  setRooms,
  setRoomUsers,
  setRoomName,
  setCurrentRoom,
  onMessages,
  onPresenceChanged,
} from '../actions/index';

const mapStateToProps = ({ chat }) => ({
  userId: chat.userId,
  rooms: chat.rooms,
  currentRoom: chat.currentRoom,
  currentUser: chat.currentUser,
  messages: chat.messages,
  newMessage: chat.newMessage,
  roomUsers: chat.roomUsers,
  roomName: chat.roomName,
});

const mapDispatchToProps = (dispatch) => ({
  initializeNewMessage() {
    dispatch(initializeNewMessage());
  },
  setNewMessage(newMessage) {
    dispatch(setNewMessage(newMessage));
  },
  onMessages(message) { // ここからconnectToRoom用
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
