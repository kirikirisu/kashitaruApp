import {
  REQUEST_DATA,
  RECEIVE_DATA_SUCCESS,
  RECEIVE_DATA_FAILED
} from '../constants/actionTypes';

const initialState = {
  shareInformations: {
    isFetching: false,
    shareInformationsArray: [],
  },
}

const shareInformationsReducer = (state = initialState.shareInformations, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shareInformationsArray: action.characterArray,
      };
    case RECEIVE_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state
  }
}

export default shareInformationsReducer;
