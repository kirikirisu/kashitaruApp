import { connect } from 'react-redux';
import RoomUsers from '../Component/chatScreenComponent/RoomUsers';

const mapStateToProps = ({ chat }) => ({
  roomUsers: chat.roomUsers,
  currentUser: chat.currentUser,
});

export default connect(mapStateToProps, null)(RoomUsers);
