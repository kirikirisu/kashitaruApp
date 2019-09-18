import { connect } from 'react-redux';
import SettingProfilePageScreen from '../Component/settingProfilePageScreen/index';
import {
  changeProfileName,
  changeProfileComment,
  initializeProfileForm,
  setAvatarImg,
  getUserInformation
} from '../actions/index';

const mapStateToProps = ({ profile }) => {
  //console.log(state);
  return {
    profileName: profile.profileName,
    profileComment: profile.profileComment,
    vatarImg: profile.avatarImg,
  };
};

const mapDispatchToProps = dispatch => ({
  changeProfileName(profileName) {
    dispatch(changeProfileName(profileName));
  },
  changeProfileComment(profileComment) {
    dispatch(changeProfileComment(profileComment));
  },
  setAvatarImg(avatarImg) {
    dispatch(setAvatarImg(avatarImg));
  },
  initializeProfileForm() {
    dispatch(initializeProfileForm());
  },
  getUserInformation(userInformation) {
    dispatch(getUserInformation(userInformation));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingProfilePageScreen);
