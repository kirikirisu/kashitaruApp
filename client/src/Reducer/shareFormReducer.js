import {
  CHANGE_PRODUCTNAME,
  CHANGE_COMPANYNAME,
  CHANGE_NAME,
  CHANGE_MAILADDRESS,
  CHANGE_COMPANYADDRESS,
  CHANGE_COMMNT,
  INITIALIZE_FORM
} from '../Action/index';

const initialState = {
  shareForm: {
    productName: '',
    companyName: '',
    name: '',
    mailAddress: '',
    companyAddress: '',
    comment: '',
  },
}

const shareFormReducer = (state = initialState.shareForm, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTNAME:
      return {
        ...state,
        productName: action.productName,
      }
    case CHANGE_COMPANYNAME:
      return {
        ...state,
        companyName: action.companyName,
      }
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
    case CHANGE_COMPANYADDRESS:
      return {
        ...state,
        companyAddress: action.companyAddress,
      }
    case CHANGE_COMMNT:
      return {
        ...state,
        comment: action.comment,
      }
    case INITIALIZE_FORM:
      return initialState.shareForm  // 初期状態を返す
    default:
      return state
  }
}

export default shareFormReducer;
