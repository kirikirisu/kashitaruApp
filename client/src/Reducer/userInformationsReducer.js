import { SIGNIN_DID_SUCCESS, TOGGLE_ISSIGNIN } from '../Action/index';

const initialState = {
  userInformations: {
    isLogin: false,
    userInfor: {},
  },
}

const userInformationsReducer = (state = initialState.userInformations, action) => {
  switch (action.type) {
    case SIGNIN_DID_SUCCESS:
      return {
        ...state,
        userInfor: action.userInformations,
      };
    case TOGGLE_ISSIGNIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    default:
      return state
  }
}

export default userInformationsReducer;
