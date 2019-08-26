// 文字列定数
export const CHANGE_PRODUCTNAME = 'CHANGE_PRODUCTNAME';
export const CHANGE_COMPANYNAME = 'CHANGE_COMPANYNAME';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_MAILADDRESS = 'CHANGE_MAILADDRESS';
export const CHANGE_COMPANYADDRESS = 'CHANGE_COMPANYADDRESS';
export const CHANGE_COMMNT = 'CHANGE_COMMNT';
export const INITIALIZE_FORM = 'INITIALIZE_FORM';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA_SUCCESS = 'RECEIVE_DATA_SUCCESS';
export const RECEIVE_DATA_FAILED = 'RECEIVE_DATA_FAILED';

// action creaters
export const changeProductName = productName => ({
  type: CHANGE_PRODUCTNAME,
  productName,
});
export const changeCompanyName = companyName => ({
  type: CHANGE_COMPANYNAME,
  companyName,
});
export const changeName = name => ({
  type: CHANGE_NAME,
  name,
});
export const changeMailAddress = mailAddress => ({
  type: CHANGE_MAILADDRESS,
  mailAddress,
});
export const changeCompanyAddress = companyAddress => ({
  type: CHANGE_COMPANYADDRESS,
  companyAddress,
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
