import { connect } from 'react-redux';
import SignInForm from '../Component/signInPageScreen';
import {
  changeSignInMailAddress,
  changeSignInPassword,
  initializeSignInForm,
  getUserInformation,
  toggleSignIn,
  addRoom,
  setCurrentUser,
  setRooms,
  initializeMessage,
  setRoomUsers,
  setRoomName,
  setCurrentRoom,
  onMessages,
  onPresenceChanged,
} from '../actions/index';

const mapStateToProps = ({ signIn, user, chat }) => ({
  signInMailAddress: signIn.signInMailAddress,
  signInPassword: signIn.signInPassword,
  isLogin: user.isLogin,
  name: user.userInfor.name,
  rooms: chat.rooms,
  currentRoom: chat.currentRoom,
});

const mapDispatchToProps = (dispatch) => ({
  changeSignInMailAddress(signInMailAddress) {
    dispatch(changeSignInMailAddress(signInMailAddress));
  },
  changeSignInPassword(signInPassword) {
    dispatch(changeSignInPassword(signInPassword));
  },
  initializeSignInForm() {
    dispatch(initializeSignInForm());
  },
  getUserInformation(userInformatios) {
    dispatch(getUserInformation(userInformatios));
  },
  toggleSignIn() {
    dispatch(toggleSignIn());
  },
  addRoom(room) {
    dispatch(addRoom(room));
  },
  setCurrentUser(currentUser) {
    dispatch(setCurrentUser(currentUser));
  },
  setRooms(rooms) {
    dispatch(setRooms(rooms));
  },
  initializeMessage() {
    dispatch(initializeMessage());
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
  onMessages(message) {
    dispatch(onMessages(message));
  },
  onPresenceChanged(currentRoom) {
    dispatch(onPresenceChanged(currentRoom));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
