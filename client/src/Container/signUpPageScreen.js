import { connect } from 'react-redux';
import SignUpForm from '../Component/signUpPageScreen/index';
import { changePassword, changeMailAddress, initializeSignUpForm, signUpFailed } from '../Action/index';

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changePassword(password) {
    dispatch(changePassword(password));
  },
  changeMailAddress(mailAddress) {
    dispatch(changeMailAddress(mailAddress));
  },
  initializeSignUpForm() {
    dispatch(initializeSignUpForm());
  },
  signUpFailed(errorMessage) {
    dispatch(signUpFailed(errorMessage));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
