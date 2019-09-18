import * as types from '../constants/actionTypes';

export const changeProductName = productName => ({
  type: types.CHANGE_PRODUCTNAME,
  productName,
});
export const setProductImgUrl = productImgUrl => ({
  type: types.SET_PRODUCT_IMG_URL,
  productImgUrl,
});
export const changeDescription = description => ({
  type: types.CHANGE_DESCRIPTION,
  description,
});
export const changePrice = price => ({
  type: types.CHANGE_PRICE,
  price,
});
export const changePeriod = period => ({
  type: types.CHANGE_PERIOD,
  period,
});
export const changeShippingArea = shippingArea => ({
  type: types.CHANGE_SHIPPING_AREA,
  shippingArea,
});
export const changeDays = days => ({
  type: types.CHANGE_DAYS,
  days,
});
export const initializeShareForm = () => ({
  type: types.INITIALIZE_SHARE_FORM,
});


export const requestData = () => ({
  type: types.REQUEST_DATA,
});
export const receiveDataSuccess = characterArray => ({
  type: types.RECEIVE_DATA_SUCCESS,
  characterArray,
});
export const receiveDataFailed = () => ({
  type: types.RECEIVE_DATA_FAILED,
});

export const changePassword = password => ({
  type: types.CHANGE_PASSWORD,
  password,
});
export const changeMailAddress = (mailAddress) => ({
  type: types.CHANGE_MAILADDRESS,
  mailAddress,
});
export const initializeSignUpForm = () => ({
  type: types.INITIALIZE_SIGNUP_FORM,
});
export const signUpFailed = errorMessage => ({
  type: types.SIGNUP_FAILED,
  errorMessage,
});


export const changeSignInMailAddress = signInMailAddress => ({
  type: types.CHANGE_SIGNIN_MAILADDRESS,
  signInMailAddress,
});
export const changeSignInPassword = signInPassword => ({
  type: types.CHANGE_SIGNIN_PASSWORD,
  signInPassword,
});
export const initializeSignInForm = () => ({
  type: types.INITIALIZE_SIGNIN_FORM,
});


export const getUserInformation = userInformations => {
  return {
    type: types.GET_USER_INFORMATION,
    userInformations,
  };
};

export const toggleSignIn = () => ({
  type: types.TOGGLE_ISSIGNIN,
});

export const changeProfileName = profileName => ({
  type: types.CHANGE_PROFILE_NAME,
  profileName
});

export const changeProfileComment = profileComment => ({
  type: types.CHANGE_PROFILE_COMMENT,
  profileComment
});

export const initializeProfileForm = () => ({
  type: types.INITIALIZE_PROFILE_FORM,
});

export const setAvatarImg = avatarImg => ({
  type: types.SET_AVATAR_IMG,
  avatarImg
});


export const requestUserShareInformation = () => ({
  type: types.REQUEST_USER_SHARE_INFORMATION
});

export const receiveUserShareInformationSuccess = userShareInformation => ({
  type: types.RECEIVE_USER_SHARE_INFORMATION_SUCCESS,
  userShareInformation
});

export const receiveUserShareInformationFailed = () => ({
  type: types.RECEIVE_USER_SHARE_INFORMATION_FAILED
});
