import { connect } from 'react-redux';
import SharePage from '../Component/sharePageScreen/index';
import {
  changeProductName,
  changeCompanyName,
  changeComment,
  initializeForm,
  receiveDataFailed,
} from '../Action/index';

const mapStateToProps = (state) => {
  // console.log(state);
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
  changeComment(comment) {
    dispatch(changeComment(comment));
  },
  initializeForm() {
    dispatch(initializeForm());
  },
  receiveDataFailed() {
    dispatch(receiveDataFailed());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
