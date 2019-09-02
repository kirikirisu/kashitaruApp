import { connect } from 'react-redux';
import SignInForm from '../Component/signInPageScreen';
import { changeSignInName, changeSignInPassword, initializeSignInForm, signInDidSuccess } from '../Action/index';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSignInName(signInName) {
    dispatch(changeSignInName(signInName));
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
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);


