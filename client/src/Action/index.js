// 文字列定数
// シェアフォーム
export const CHANGE_PRODUCTNAME = 'CHANGE_PRODUCTNAME';
export const CHANGE_COMPANYNAME = 'CHANGE_COMPANYNAME';
export const CHANGE_COMMNT = 'CHANGE_COMMNT';
export const INITIALIZE_FORM = 'INITIALIZE_FORM';
// rentページ // シェア情報取得
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILED = 'RECEIVE_DATA_FAILED';
// サインアップフォーム
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_MAILADDRESS = 'CHANGE_MAILADDRESS';
export const INITIALIZE_SIGNUP_FORM = 'INITIALIZE_SIGNUP_FORM';
// サインアップのエラー取得
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
// サインインフォーム
export const CHANGE_SIGNIN_MAILADDRESS = 'CHANGE_SIGNIN_MAILADDRESS';
export const CHANGE_SIGNIN_PASSWORD = 'CHANGE_SIGNIN_PASSWORD';
export const INITIALIZE_SIGNIN_FORM = 'INITIALIZE_SIGNIN_FORM';
// サインイン成功
export const SIGNIN_DID_SUCCESS = 'SIGNIN_DID_SUCCESS';
export const TOGGLE_ISSIGNIN = 'TOGGLE_ISSIGNIN';

// action creaters
export const changeProductName = productName => ({
  type: CHANGE_PRODUCTNAME,
  productName,
});
export const changeCompanyName = companyName => ({
  type: CHANGE_COMPANYNAME,
  companyName,
});
export const changeComment = comment => ({
  type: CHANGE_COMMNT,
  comment,
});
export const initializeForm = () => ({
  type: INITIALIZE_FORM,
});


export const requestData = () => ({
  type: REQUEST_DATA,
});
export const receiveDataSuccess = characterArray => ({
  type: RECEIVE_DATA_SUCCESS,
  characterArray,
});
export const receiveDataFailed = () => ({
  type: RECEIVE_DATA_FAILED,
});


export const changeName = name => ({
  type: CHANGE_NAME,
  name,
});
export const changePassword = password => ({
  type: CHANGE_PASSWORD,
  password,
});
export const changeMailAddress = (mailAddress) => ({
  type: CHANGE_MAILADDRESS,
  mailAddress,
});
export const initializeSignUpForm = () => ({
  type: INITIALIZE_SIGNUP_FORM,
});
export const signUpFailed = errorMessage => ({
  type: SIGNUP_FAILED,
  errorMessage,
});


export const changeSignInMailAddress = signInMailAddress => ({
  type: CHANGE_SIGNIN_MAILADDRESS,
  signInMailAddress,
});
export const changeSignInPassword = signInPassword => ({
  type: CHANGE_SIGNIN_PASSWORD,
  signInPassword,
});
export const initializeSignInForm = () => ({
  type: INITIALIZE_SIGNIN_FORM,
});


export const signInDidSuccess = userInformations => {
  return {
    type: SIGNIN_DID_SUCCESS,
    userInformations,
  };
};

export const toggleSignIn = () => ({
  type: TOGGLE_ISSIGNIN,
});
