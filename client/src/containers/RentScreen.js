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
} from '../actions/index';

const mapStateToProps = ({ getShare, chat }) => ({
  isFetching: getShare.isFetching,
  shareInformationsArray: getShare.shareInformationsArray,
  currentUser: chat.currentUser,
  rooms: chat.rooms,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RentScreen);
