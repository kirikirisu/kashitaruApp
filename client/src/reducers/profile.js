import {
  REQUEST_PROFILE_DATA,
  RECEIVE_PROFOLE_SUCCESS,
  RECEIVE_PROFILE_FAILED,
} from '../constants/actionTypes';

const initialState = {
  profileInformation: {
    profileIsFetching: false,
    user: {},
    product: [],
  },
};

const profileFormReducer = (state = initialState.profileInformation, action) => {
  switch (action.type) {
    case REQUEST_PROFILE_DATA:
      return {
        ...state,
        profileIsFetching: true,
      };
    case RECEIVE_PROFOLE_SUCCESS:
      return {
        ...state,
        profileIsFetching: false,
        user: action.payload.user,
        product: action.payload.product,
      };
    case RECEIVE_PROFILE_FAILED:
      return {
        ...state,
        profileIsFetching: false,
      };
    default:
      return state;
  }
};

export default profileFormReducer;
