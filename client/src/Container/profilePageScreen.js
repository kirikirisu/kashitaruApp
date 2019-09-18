import { connect } from 'react-redux';
import ProfilePage from '../Component/profilePageScreen';
import {
  requestUserShareInformation,
  receiveUserShareInformationSuccess,
  receiveUserShareInformationFailed
} from '../Action/index';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
  requestUserShareInformation() {
    dispatch(requestUserShareInformation());
  },
  receiveUserShareInformationSuccess(userShareInformation) {
    dispatch(receiveUserShareInformationSuccess(userShareInformation));
  },
  receiveUserShareInformationFailed() {
    dispatch(receiveUserShareInformationFailed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
