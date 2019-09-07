import { connect } from 'react-redux';
import SettingProfilePageScreen from '../Component/settingProfilePageScreen/index';
import {
  changeProfileName,
  changeProfileComment,
  initializeProfileForm,
  setAvatarImg,
  getUserInformation
} from '../Action/index';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    store: state,
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
