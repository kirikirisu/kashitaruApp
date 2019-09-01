// 文字列定数
export const CHANGE_PRODUCTNAME = 'CHANGE_PRODUCTNAME';
export const CHANGE_COMPANYNAME = 'CHANGE_COMPANYNAME';
// export const CHANGE_COMPANYADDRESS = 'CHANGE_COMPANYADDRESS';
export const CHANGE_COMMNT = 'CHANGE_COMMNT';
export const INITIALIZE_FORM = 'INITIALIZE_FORM';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILED = 'RECEIVE_DATA_FAILED';

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_MAILADDRESS = 'CHANGE_MAILADDRESS';
export const INITIALIZE_SIGNUP_FORM = 'INITIALIZE_SIGNUP_FORM';

export const CHANGE_SIGNIN_NAME = 'CHANGE_SIGNIN_NAME';
export const CHANGE_SIGNIN_MAILADDRESS = 'CHANGE_SIGNIN_MAILADDRESS';
export const INITIALIZE_SIGNIN_FORM = 'INITIALIZE_SIGNIN_FORM';

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
/* export const changeCompanyAddress = companyAddress => ({
  type: CHANGE_COMPANYADDRESS,
  companyAddress,
}); */
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
export const changeMailAddress = mailAddress => ({
  type: CHANGE_MAILADDRESS,
  mailAddress,
});
export const initializeSignUpForm = () => ({
  type: INITIALIZE_SIGNUP_FORM,
});


export const changeSignInName = signInName => ({
  type: CHANGE_SIGNIN_NAME,
  signInName,
});
export const changeSignInMailAddress = signInMailAddress => ({
  type: CHANGE_SIGNIN_MAILADDRESS,
  signInMailAddress,
});
export const initializeSignInForm = () => ({
  type: INITIALIZE_SIGNIN_FORM,
});


export const signInDidSuccess = userInformations => {
  const { isLogin, name, mailAddress } = userInformations;
  let userInfor = {};
  userInfor.name = name;
  userInfor.mailAddress = mailAddress;

  return {
    type: SIGNIN_DID_SUCCESS,
    isLogin,
    userInfor,
  };
};