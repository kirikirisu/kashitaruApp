import {
  CHANGE_PASSWORD,
  CHANGE_MAILADDRESS,
  INITIALIZE_SIGNUP_FORM,
  SIGNUP_FAILED,
} from '../constants/actionTypes';

const initialState = {
  signUpForm: {
    password: '',
    mailAddress: '',
    errorMessage: '',
  },
}

const signUpFormReducer = (state = initialState.signUpForm, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
      }
    case CHANGE_MAILADDRESS:
      return {
        ...state,
        mailAddress: action.mailAddress,
      }
    case INITIALIZE_SIGNUP_FORM:
      return initialState.signUpForm  // 初期状態を返す
    case SIGNUP_FAILED:
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

export default signUpFormReducer;
