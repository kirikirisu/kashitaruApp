import { connect } from 'react-redux';
import SharePage from '../Component/sharePageScreen/index';
import { changeName, changeAge, initializeForm } from '../Action/index';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changeName(nameText) {
    dispatch(changeName(nameText));
  },
  changeAge(ageText) {
    dispatch(changeAge(ageText));
  },
  initializeForm() {
    dispatch(initializeForm());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
