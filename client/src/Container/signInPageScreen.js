import { connect } from 'react-redux';
import SignInForm from '../Component/signInPageScreen';
import { changeSignInMailAddress, changeSignInPassword, initializeSignInForm, signInDidSuccess, toggleSignIn } from '../Action/index';

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
  signInDidSuccess(userInformatios) {
    dispatch(signInDidSuccess(userInformatios));
  },
  toggleSignIn() {
    dispatch(toggleSignIn());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);


