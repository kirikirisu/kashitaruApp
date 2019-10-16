import { connect } from 'react-redux';
import RentScreen from '../components/RentScreen/index';
import {
  initializeMessage,
  setRooms,
  setRoomUsers,
  setRoomName,
  setCurrentRoom,
  onMessages,
  onPresenceChanged,
  toggleRedirectChat,
  postProfile,
} from '../actions/index';

const mapStateToProps = ({ getShare, chat }) => ({
  isFetching: getShare.isFetching,
  shareInformationsArray: getShare.shareInformationsArray,
  currentUser: chat.currentUser,
  rooms: chat.rooms,
  redirectChat: getShare.redirectChat,
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
  toggleRedirectChat(bool) {
    dispatch(toggleRedirectChat(bool));
  },
  postProfile(id) {
    dispatch(postProfile(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RentScreen);
