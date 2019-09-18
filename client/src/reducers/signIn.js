import {
  CHANGE_SIGNIN_MAILADDRESS,
  CHANGE_SIGNIN_PASSWORD,
  INITIALIZE_SIGNIN_FORM
} from '../constants/actionTypes';

const initialState = {
  signInForm: {
    signInMailAddress: '',
    signInPassword: '',
  },
};

const signInFormReducer = (state = initialState.signInForm, action) => {
  switch (action.type) {
    case CHANGE_SIGNIN_MAILADDRESS:
      return {
        ...state,
        signInMailAddress: action.signInMailAddress,
      }
    case CHANGE_SIGNIN_PASSWORD:
      return {
        ...state,
        signInPassword: action.signInPassword,
      }
    case INITIALIZE_SIGNIN_FORM:
      return initialState.signInForm  // 初期状態を返す
    default:
      return state
  }
}

export default signInFormReducer;
