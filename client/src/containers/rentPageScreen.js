import { connect } from 'react-redux';
import RentPage from '../Component/rentPageScreen/index';
import {
  requestData,
  receiveDataSuccess,
  receiveDataFailed
} from '../actions/index';

const mapStateToProps = ({ getShare }) => {
  // console.log(state);
  return {
    allShare: getShare,
  };
};

const mapDispatchToProps = dispatch => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(RentPage);
