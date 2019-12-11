import axios from 'axios';
import * as types from '../constants/actionTypes';

export const changeProductName = (productName) => ({
  type: types.CHANGE_PRODUCTNAME,
  productName,
});
export const setProductImgUrl = (productImgUrl) => ({
  type: types.SET_PRODUCT_IMG_URL,
  productImgUrl,
});
export const changeDescription = (description) => ({
  type: types.CHANGE_DESCRIPTION,
  description,
});
export const changePrice = (price) => ({
  type: types.CHANGE_PRICE,
  price,
});
export const changePeriod = (period) => ({
  type: types.CHANGE_PERIOD,
  period,
});
export const changeShippingArea = (shippingArea) => ({
  type: types.CHANGE_SHIPPING_AREA,
  shippingArea,
});
export const changeDays = (days) => ({
  type: types.CHANGE_DAYS,
  days,
});
export const initializeShareForm = () => ({
  type: types.INITIALIZE_SHARE_FORM,
});


const requestData = () => ({
  type: types.REQUEST_DATA,
});
const receiveDataSuccess = (allShareData) => ({
  type: types.RECEIVE_DATA_SUCCESS,
  allShareData,
});
const receiveDataFailed = () => ({
  type: types.RECEIVE_DATA_FAILED,
});

export const getAllShare = () => (dispatch) => {
  dispatch(requestData());
  return axios.get(`${process.env.REACT_APP_PROXY}/api/share`)
    .then((response) => {
      console.log(response);
      const products = response.data;
      dispatch(receiveDataSuccess(products));
    })
    .catch((err) => {
      console.error(new Error(err));
      dispatch(receiveDataFailed());
    });
};

export const changePassword = (password) => ({
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
export const signUpFailed = (errorMessage) => ({
  type: types.SIGNUP_FAILED,
  errorMessage,
});


export const changeSignInMailAddress = (signInMailAddress) => ({
  type: types.CHANGE_SIGNIN_MAILADDRESS,
  signInMailAddress,
});
export const changeSignInPassword = (signInPassword) => ({
  type: types.CHANGE_SIGNIN_PASSWORD,
  signInPassword,
});
export const initializeSignInForm = () => ({
  type: types.INITIALIZE_SIGNIN_FORM,
});


export const getUserInformation = (userInformation) => ({
  type: types.GET_USER_INFORMATION,
  userInformation,
});

export const toggleSignIn = () => ({
  type: types.TOGGLE_ISSIGNIN,
});

export const changeProfileName = (profileName) => ({
  type: types.CHANGE_PROFILE_NAME,
  profileName,
});

export const changeProfileComment = (profileComment) => ({
  type: types.CHANGE_PROFILE_COMMENT,
  profileComment,
});

export const initializeProfileForm = () => ({
  type: types.INITIALIZE_PROFILE_FORM,
});

export const setAvatarImg = (avatarImg) => ({
  type: types.SET_AVATAR_IMG,
  avatarImg,
});


const requestProfileData = () => ({
  type: types.REQUEST_PROFILE_DATA,
});

const receiveProfileSuccess = (profileData) => ({
  type: types.RECEIVE_PROFOLE_SUCCESS,
  payload: {
    user: profileData.user,
    product: profileData.product,
  },
});

const receiveProfileFailed = () => ({
  type: types.RECEIVE_PROFILE_FAILED,
});

export const postProfile = (id) => (dispatch) => {
  dispatch(requestProfileData());
  return axios.post(`${process.env.REACT_APP_PROXY}/api/postProfileData`, { id })
    .then((response) => {
      const profileData = response.data;
      console.log(profileData);
      dispatch(receiveProfileSuccess(profileData));
    })
    .catch((err) => {
      console.error(new Error(err));
      dispatch(receiveProfileFailed());
    });
};

export const addRoom = (room) => ({
  type: types.ADD_ROOM,
  room,
});

export const setCurrentUser = (currentUser) => ({
  type: types.SET_CURRENT_USER,
  currentUser,
});

export const setRooms = (rooms) => ({
  type: types.SET_ROOMS,
  rooms,
});

export const initializeMessage = () => ({
  type: types.INITIALIZE_MESSAGE,
});

export const setRoomUsers = (roomUser) => ({
  type: types.SET_ROOM_USERS,
  roomUser,
});

export const setRoomName = (roomName) => ({
  type: types.SET_ROOM_NAME,
  roomName,
});

export const setCurrentRoom = (currentRoom) => ({
  type: types.SET_CURRENT_ROOM,
  currentRoom,
});

export const onPresenceChanged = (currentRoom) => ({
  type: types.ON_PRESENCE_CHANGED,
  currentRoom,
});

export const onMessages = (message) => ({
  type: types.ON_MESSAGES,
  message,
});

export const initializeNewMessage = () => ({
  type: types.INITIALIZE_NEW_MESSAGE,
});

export const setNewMessage = (newMessage) => ({
  type: types.SET_NEW_MESSAGE,
  newMessage,
});

export const toggleRedirectChat = (bool) => ({
  type: types.TOGGLE_REDIRECT_CHAT,
  bool,
});
