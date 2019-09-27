import { connect } from 'react-redux';
import RentPage from '../Component/rentPageScreen/index';
import {
  requestData,
  receiveDataSuccess,
  receiveDataFailed,
} from '../actions/index';

const mapStateToProps = ({ getShare }) => ({
  isFetching: getShare.isFetching,
  shareInformationsArray: getShare.shareInformationsArray,
});

const mapDispatchToProps = (dispatch) => ({
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
