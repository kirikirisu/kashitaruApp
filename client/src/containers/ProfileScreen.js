import { connect } from 'react-redux';
import ProfilePage from '../components/ProfileScreen';
import {
  requestProfileData,
  receiveProfileSuccess,
  receiveProfileFailed,
} from '../actions/index';

const mapStateToProps = ({ profile, user }) => ({
  id: user.userInfor.id,
  isLogin: user.isLogin,
  name: user.userInfor.name,
  profileIsFetching: profile.profileIsFetching,
  user: profile.user,
  product: profile.product,
});

const mapDispatchToProps = (dispatch) => ({
  requestProfileData() {
    dispatch(requestProfileData());
  },
  receiveProfileSuccess(profile) {
    dispatch(receiveProfileSuccess(profile));
  },
  receiveProfileFailed() {
    dispatch(receiveProfileFailed());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
