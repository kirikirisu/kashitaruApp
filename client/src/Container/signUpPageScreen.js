import { connect } from 'react-redux';
import SignUpForm from '../Component/signUpPageScreen/index';
import { changeName, changePassword, initializeSignUpForm, sameUserExist } from '../Action/index';

const mapStateToProps = (state) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changeName(name) {
    dispatch(changeName(name));
  },
  changePassword(password) {
    dispatch(changePassword(password));
  },
  initializeSignUpForm() {
    dispatch(initializeSignUpForm());
  },
  sameUserExist(isExistUser) {
    dispatch(sameUserExist(isExistUser));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
