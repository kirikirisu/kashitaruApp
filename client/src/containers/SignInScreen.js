import { connect } from 'react-redux';
import SignInScreen from '../components/SignInScreen';
import {
  changeSignInMailAddress,
  changeSignInPassword,
  initializeSignInForm,
  getUserInformation,
  toggleSignIn,
  addRoom,
  setCurrentUser,
  setRooms,
  postProfile,
} from '../actions/index';

const mapStateToProps = ({ signIn, user, chat }) => ({
  signInMailAddress: signIn.signInMailAddress,
  signInPassword: signIn.signInPassword,
  isLogin: user.isLogin,
  id: user.userInfor.id,
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
  postProfile(id) {
    dispatch(postProfile(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
