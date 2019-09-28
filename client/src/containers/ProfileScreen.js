import { connect } from 'react-redux';
import ProfilePage from '../components/ProfileScreen';
import {
  requestUserShareInformation,
  receiveUserShareInformationSuccess,
  receiveUserShareInformationFailed,
} from '../actions/index';

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin,
  id: user.userInfor.id,
  name: user.userInfor.name,
  avatar: user.userInfor.avatar,
  comment: user.userInfor.comment,
  userShareInformation: user.userShareInformation,
  isFechingShareInfor: user.isFechingShareInfor,
});

const mapDispatchToProps = (dispatch) => ({
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
