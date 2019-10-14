import { connect } from 'react-redux';
import RentScreen from '../components/RentScreen/index';
import {
  requestData,
  receiveDataSuccess,
  receiveDataFailed,
  initializeMessage,
  setRooms,
  setRoomUsers,
  setRoomName,
  setCurrentRoom,
  onMessages,
  onPresenceChanged,
  toggleRedirectChat,
  requestProfileData,
  receiveProfileSuccess,
  receiveProfileFailed,
} from '../actions/index';

const mapStateToProps = ({ getShare, chat }) => ({
  isFetching: getShare.isFetching,
  shareInformationsArray: getShare.shareInformationsArray,
  currentUser: chat.currentUser,
  rooms: chat.rooms,
  redirectChat: getShare.redirectChat,
});

const mapDispatchToProps = (dispatch) => ({
  requestData() {
    dispatch(requestData());
  },
  receiveDataSuccess(characterArray) {
    dispatch(receiveDataSuccess(characterArray));
  },
  receiveDataFailed() {
    dispatch(receiveDataFailed());
  },
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
  requestProfileData() {
    dispatch(requestProfileData());
  },
  receiveProfileSuccess(profile) {
    dispatch(receiveProfileSuccess(profile));
  },
  receiveProfileFailed() {
    dispatch(receiveProfileFailed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RentScreen);
