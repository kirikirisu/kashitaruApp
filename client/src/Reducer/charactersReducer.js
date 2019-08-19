import { REQUEST_DATA, RECEIVE_DATA_SUCCESS, RECEIVE_DATA_FAILED } from '../Action/index';

const initialState = {
  characters: {
    isFetching: false,
    characterArray: [],
  },
}

const charactersReducer = (state = initialState.characters, action) => {
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
        characterArray: action.characterArray,
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

export default charactersReducer;
