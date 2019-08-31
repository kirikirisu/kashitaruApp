import { CHANGE_SIGNIN_NAME, CHANGE_SIGNIN_MAILADDRESS, INITIALIZE_SIGNIN_FORM } from '../Action/index';

const initialState = {
  signInForm: {
    signInName: '',
    signInMailAddress: '',
  },
};

const signInFormReducer = (state = initialState.signInForm, action) => {
  switch (action.type) {
    case CHANGE_SIGNIN_NAME:
      return {
        ...state,
        signInName: action.signInName,
      }
    case CHANGE_SIGNIN_MAILADDRESS:
      return {
        ...state,
        signInMailAddress: action.signInMailAddress,
      }
    case INITIALIZE_SIGNIN_FORM:
      return initialState.signInForm  // 初期状態を返す
    default:
      return state
  }
}

export default signInFormReducer;
