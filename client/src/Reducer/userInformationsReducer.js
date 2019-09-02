import { SIGNIN_DID_SUCCESS } from '../Action/index';

const initialState = {
  userInformations: {
    isLogin: null,
    userInfor: {},
    share: [],
  },
}

const userInformationsReducer = (state = initialState.userInformations, action) => {
  switch (action.type) {
    case SIGNIN_DID_SUCCESS:
      return {
        ...state,
        isLogin: action.isLogin,
        userInfor: action.userInfor,
        share: action.share,
      };
    default:
      return state
  }
}

export default userInformationsReducer;
