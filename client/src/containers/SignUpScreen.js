import { connect } from 'react-redux';
import SignUpScreen from '../components/SignUpScreen/index';
import {
  changePassword,
  changeMailAddress,
  initializeSignUpForm,
  signUpFailed,
} from '../actions/index';

const mapStateToProps = ({ signUp }) => ({
  password: signUp.password,
  mailAddress: signUp.mailAddress,
  errorMessage: signUp.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
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


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
