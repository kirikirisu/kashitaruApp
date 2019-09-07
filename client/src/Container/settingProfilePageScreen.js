import { connect } from 'react-redux';
import SettingProfilePageScreen from '../Component/settingProfilePageScreen/index';
import {
  changeProfileName,
  changeProfileComment,
  initializeProfileForm,
  setAvatarImg
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
});


export default connect(mapStateToProps, mapDispatchToProps)(SettingProfilePageScreen);
