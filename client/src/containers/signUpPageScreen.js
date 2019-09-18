import { connect } from 'react-redux';
import SignUpForm from '../Component/signUpPageScreen/index';
import {
  changePassword,
  changeMailAddress,
  initializeSignUpForm,
  signUpFailed
} from '../actions/index';

const mapStateToProps = ({ signUp }) => {
  return {
    password: signUp.password,
    mailAddress: signUp.mailAddress,
    errorMessage: signUp.errorMessage,
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
