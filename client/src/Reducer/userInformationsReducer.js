import { SIGNIN_DID_SUCCESS } from '../Action/index';

const initialState = {
  userInformations: {
    isLogin: null,
    userInfor: {},
  },
}

const userInformationsReducer = (state = initialState.userInformations, action) => {
  switch (action.type) {
    case SIGNIN_DID_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin,
        userInfor: action.userInfor,
      };
    default:
      return state
  }
}

export default userInformationsReducer;
