import {
  GET_USER_INFORMATION,
  TOGGLE_ISSIGNIN,
  REQUEST_USER_SHARE_INFORMATION,
  RECEIVE_USER_SHARE_INFORMATION_SUCCESS,
  RECEIVE_USER_SHARE_INFORMATION_FAILED,
} from '../constants/actionTypes';

const initialState = {
  userInformations: {
    isLogin: false,
    isFechingShareInfor: false,
    userInfor: {},
    userShareInformation: [],
  },
}

const userInformationsReducer = (state = initialState.userInformations, action) => {
  switch (action.type) {
    case GET_USER_INFORMATION:
      return {
        ...state,
        userInfor: action.userInformations,
      };
    case TOGGLE_ISSIGNIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case REQUEST_USER_SHARE_INFORMATION:
      return {
        ...state,
        isFechingShareInfor: true,
      };
    case RECEIVE_USER_SHARE_INFORMATION_SUCCESS:
      return {
        ...state,
        userShareInformation: action.userShareInformation,
        isFechingShareInfor: false,
      };
    case RECEIVE_USER_SHARE_INFORMATION_FAILED:
      return {
        ...state,
        isFechingShareInfor: false,
      };
    default:
      return state
  }
}

export default userInformationsReducer;
