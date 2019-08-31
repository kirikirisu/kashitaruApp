import { connect } from 'react-redux';
import SignUpForm from '../Component/signUpPageScreen/index';
import { changeName, changeMailAddress, initializeSignUpForm } from '../Action/index';

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changeName(name) {
    dispatch(changeName(name));
  },
  changeMailAddress(mailAddress) {
    dispatch(changeMailAddress(mailAddress));
  },
  initializeSignUpForm() {
    dispatch(initializeSignUpForm());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
