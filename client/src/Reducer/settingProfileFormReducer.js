import {
  CHANGE_PROFILE_NAME,
  CHANGE_PROFILE_COMMENT,
  INITIALIZE_PROFILE_FORM,
  SET_AVATAR_IMG,
} from '../Action/index';

const initialState = {
  profileForm: {
    profileName: '',
    profileComment: '',
    avatarImg: '',
  },
};

const settingProfileFormReducer = (state = initialState.profileForm, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_NAME:
      return {
        ...state,
        profileName: action.profileName,
      }
    case CHANGE_PROFILE_COMMENT:
      return {
        ...state,
        profileComment: action.profileComment,
      }
    case SET_AVATAR_IMG:
      return {
        ...state,
        avatarImg: action.avatarImg,
      }
    case INITIALIZE_PROFILE_FORM:
      return initialState.profileForm  // 初期状態を返す
    default:
      return state
  }
}

export default settingProfileFormReducer;
