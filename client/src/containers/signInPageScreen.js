import { connect } from 'react-redux';
import SignInForm from '../Component/signInPageScreen';
import {
  changeSignInMailAddress,
  changeSignInPassword,
  initializeSignInForm,
  getUserInformation,
  toggleSignIn
} from '../actions/index';

const mapStateToProps = ({ signIn, user }) => {

  return {
    signInMailAddress: signIn.signInMailAddress,
    signInPassword: signIn.signInPassword,
    isLogin: user.isLogin,
  };
};

const mapDispatchToProps = dispatch => ({
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
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
