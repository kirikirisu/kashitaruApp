import { connect } from 'react-redux';
import ChatPageComponent from '../Component/chatScreenComponent/index';
import {
  initializeNewMessage,
  setNewMessage,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPageComponent);
