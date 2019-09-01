import {
  CHANGE_NAME,
  CHANGE_MAILADDRESS,
  INITIALIZE_SIGNUP_FORM,
  SAME_USER_EXIST,
} from '../Action/index';

const initialState = {
  signUpForm: {
    name: '',
    mailAddress: '',
    isExistUser: null,
  },
}

const signUpFormReducer = (state = initialState.signUpForm, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      }
    case CHANGE_MAILADDRESS:
      return {
        ...state,
        mailAddress: action.mailAddress,
      }
    case SAME_USER_EXIST:
      return {
        ...state,
        isExistUser: action.isExistUser,
      }
    case INITIALIZE_SIGNUP_FORM:
      return initialState.signUpForm  // 初期状態を返す
    default:
      return state
  }
}

export default signUpFormReducer;
