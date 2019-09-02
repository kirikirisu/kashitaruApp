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
export const INITIALIZE_SIGNUP_FORM = 'INITIALIZE_SIGNUP_FORM';
// サインアップで同じアカウントが存在
export const SAME_USER_EXIST = 'SAME_USER_EXIST';
// サインインフォーム
export const CHANGE_SIGNIN_NAME = 'CHANGE_SIGNIN_NAME';
export const CHANGE_SIGNIN_PASSWORD = 'CHANGE_SIGNIN_PASSWORD';
export const INITIALIZE_SIGNIN_FORM = 'INITIALIZE_SIGNIN_FORM';
// サインイン成功
export const SIGNIN_DID_SUCCESS = 'SIGNIN_DID_SUCCESS';

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
export const initializeSignUpForm = () => ({
  type: INITIALIZE_SIGNUP_FORM,
});
export const sameUserExist = (isExistUser) => ({
  type: SAME_USER_EXIST,
  isExistUser,
});


export const changeSignInName = signInName => ({
  type: CHANGE_SIGNIN_NAME,
  signInName,
});
export const changeSignInPassword = signInPassword => ({
  type: CHANGE_SIGNIN_PASSWORD,
  signInPassword,
});
export const initializeSignInForm = () => ({
  type: INITIALIZE_SIGNIN_FORM,
});


export const signInDidSuccess = userInformations => {
  const { isLogin, name, password, share } = userInformations;
  let userInfor = {};
  userInfor.name = name;
  userInfor.password = password;
  return {
    type: SIGNIN_DID_SUCCESS,
    isLogin,
    userInfor,
    share,
  };
};