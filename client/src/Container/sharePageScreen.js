import { connect } from 'react-redux';
import SharePage from '../Component/sharePageScreen/index';
import {
  changeProductName,
  changeCompanyName,
  changeName,
  changeMailAddress,
  changeCompanyAddress,
  changeComment,
  initializeForm,
  requestData,
  receiveDataSuccess,
  receiveDataFailed,
} from '../Action/index';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  changeProductName(productName) {
    dispatch(changeProductName(productName));
  },
  changeCompanyName(companyName) {
    dispatch(changeCompanyName(companyName));
  },
  changeName(name) {
    dispatch(changeName(name));
  },
  changeMailAddress(mailAddress) {
    dispatch(changeMailAddress(mailAddress));
  },
  changeCompanyAddress(companyAddress) {
    dispatch(changeCompanyAddress(companyAddress));
  },
  changeComment(comment) {
    dispatch(changeComment(comment));
  },
  initializeForm() {
    dispatch(initializeForm());
  },
  requestData() {
    dispatch(requestData());
  },
  receiveDataSuccess(characterArray) {
    dispatch(receiveDataSuccess(characterArray));
  },
  receiveDataFailed() {
    dispatch(receiveDataFailed());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
