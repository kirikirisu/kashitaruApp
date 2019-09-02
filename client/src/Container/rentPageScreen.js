import { connect } from 'react-redux';
import RentPage from '../Component/rentPageScreen/index';
import { requestData, receiveDataSuccess, receiveDataFailed } from '../Action/index';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    store: state,
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
