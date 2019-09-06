import { GET_USER_INFORMATION, TOGGLE_ISSIGNIN } from '../Action/index';

const initialState = {
  userInformations: {
    isLogin: false,
    userInfor: {},
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
    default:
      return state
  }
}

export default userInformationsReducer;
