// 文字列定数
// シェアフォーム
export const CHANGE_PRODUCTNAME = 'CHANGE_PRODUCTNAME';
export const SET_PRODUCT_IMG_URL = 'SET_PRODUCT_IMG_URL';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const CHANGE_PRICE = 'CHANGE_PRICE';
export const CHANGE_PERIOD = 'CHANGE_PERIOD';
export const CHANGE_SHIPPING_AREA = 'CHANGE_SHIPPING_AREA';
export const CHANGE_DAYS = 'CHANGE_DAYS';
export const INITIALIZE_SHARE_FORM = 'INITIALIZE_SHARE_FORM';
// rentページ // シェア情報取得
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILED = 'RECEIVE_DATA_FAILED';
// サインアップフォーム
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
export const GET_USER_INFORMATION = 'GET_USER_INFORMATION';
export const TOGGLE_ISSIGNIN = 'TOGGLE_ISSIGNIN';
// プロフィールの設定
export const CHANGE_PROFILE_NAME = 'CHANGE_PROFILE_NAME';
export const CHANGE_PROFILE_COMMENT = 'CHANGE_PROFILE_COMMENT';
export const INITIALIZE_PROFILE_FORM = 'INITIALIZE_PROFILE_FORM';
export const SET_AVATAR_IMG = 'SET_AVATAR_IMG';
// ユーザーの出品情報取得
export const REQUEST_USER_SHARE_INFORMATION = 'REQUEST_USER_SHARE_INFORMATION';
export const RECEIVE_USER_SHARE_INFORMATION_SUCCESS = 'RECEIVE_USER_SHARE_INFORMATION_SUCCESS';
export const RECEIVE_USER_SHARE_INFORMATION_FAILED = 'RECEIVE_USER_SHARE_INFORMATION_FAILED';

// action creaters
export const changeProductName = productName => ({
  type: CHANGE_PRODUCTNAME,
  productName,
});
export const setProductImgUrl = productImgUrl => ({
  type: SET_PRODUCT_IMG_URL,
  productImgUrl,
});
export const changeDescription = description => ({
  type: CHANGE_DESCRIPTION,
  description,
});
export const changePrice = price => ({
  type: CHANGE_PRICE,
  price,
});
export const changePeriod = period => ({
  type: CHANGE_PERIOD,
  period,
});
export const changeShippingArea = shippingArea => ({
  type: CHANGE_SHIPPING_AREA,
  shippingArea,
});
export const changeDays = days => ({
  type: CHANGE_DAYS,
  days,
});
export const initializeShareForm = () => ({
  type: INITIALIZE_SHARE_FORM,
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


export const getUserInformation = userInformations => {
  return {
    type: GET_USER_INFORMATION,
    userInformations,
  };
};

export const toggleSignIn = () => ({
  type: TOGGLE_ISSIGNIN,
});

export const changeProfileName = profileName => ({
  type: CHANGE_PROFILE_NAME,
  profileName
});

export const changeProfileComment = profileComment => ({
  type: CHANGE_PROFILE_COMMENT,
  profileComment
});

export const initializeProfileForm = () => ({
  type: INITIALIZE_PROFILE_FORM,
});

export const setAvatarImg = avatarImg => ({
  type: SET_AVATAR_IMG,
  avatarImg
});


export const requestUserShareInformation = () => ({
  type: REQUEST_USER_SHARE_INFORMATION
});

export const receiveUserShareInformationSuccess = userShareInformation => ({
  type: RECEIVE_USER_SHARE_INFORMATION_SUCCESS,
  userShareInformation
});

export const receiveUserShareInformationFailed = () => ({
  type: RECEIVE_USER_SHARE_INFORMATION_FAILED
});
