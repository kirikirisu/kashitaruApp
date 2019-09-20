import { connect } from 'react-redux';
import ChatPageComponent from '../Component/chatScreenComponent/index';

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

export default connect(mapStateToProps, null)(ChatPageComponent);
