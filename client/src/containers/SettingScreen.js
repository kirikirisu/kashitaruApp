import { connect } from 'react-redux';
import SettingScreen from '../components/SettingScreen/index';
import {
  changeProfileName,
  changeProfileComment,
  initializeProfileForm,
  setAvatarImg,
  getUserInformation,
} from '../actions/index';

const mapStateToProps = ({ setting }) => ({
  profileName: setting.profileName,
  profileComment: setting.profileComment,
  avatarImg: setting.avatarImg,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfileName(profileName) {
    dispatch(changeProfileName(profileName));
  },
  changeProfileComment(profileComment) {
    dispatch(changeProfileComment(profileComment));
  },
  setImg(avatarImg) {
    dispatch(setAvatarImg(avatarImg));
  },
  initializeProfileForm() {
    dispatch(initializeProfileForm());
  },
  getUserInformation(userInformation) {
    dispatch(getUserInformation(userInformation));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
