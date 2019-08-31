import { connect } from 'react-redux';
import SignInForm from '../Component/signInPageScreen';
import { changeSignInName, changeSignInMailAddress, initializeSignInForm, signInDidSuccess } from '../Action/index';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSignInName(signInName) {
    dispatch(changeSignInName(signInName));
  },
  changeSignInMailAddress(signInMailAddress) {
    dispatch(changeSignInMailAddress(signInMailAddress));
  },
  initializeSignInForm() {
    dispatch(initializeSignInForm());
  },
  signInDidSuccess(userInformatios) {
    dispatch(signInDidSuccess(userInformatios));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);


