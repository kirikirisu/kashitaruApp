import { SIGNIN_DID_SUCCESS } from '../Action/index';

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
        isLogin: true,
        userInfor: action.userInformations,
      };
    default:
      return state
  }
}

export default userInformationsReducer;
