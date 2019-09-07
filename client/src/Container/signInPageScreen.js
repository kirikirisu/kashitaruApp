import { connect } from 'react-redux';
import SignInForm from '../Component/signInPageScreen';
import { changeSignInMailAddress, changeSignInPassword, initializeSignInForm, getUserInformation, toggleSignIn } from '../Action/index';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    store: state,
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
