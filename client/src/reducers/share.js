import {
  CHANGE_PRODUCTNAME,
  SET_PRODUCT_IMG_URL,
  CHANGE_DESCRIPTION,
  CHANGE_PRICE,
  CHANGE_PERIOD,
  CHANGE_SHIPPING_AREA,
  CHANGE_DAYS,
  INITIALIZE_SHARE_FORM
} from '../constants/actionTypes';

const initialState = {
  shareForm: {
    productName: '',
    productImgUrl: '',
    description: '',
    price: '',
    period: '',
    shippingArea: '',
    days: '',
  },
}

const shareFormReducer = (state = initialState.shareForm, action) => {
  switch (action.type) {
    case CHANGE_PRODUCTNAME:
      return {
        ...state,
        productName: action.productName,
      }
    case SET_PRODUCT_IMG_URL:
      return {
        ...state,
        productImgUrl: action.productImgUrl,
      }
    case CHANGE_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      }
    case CHANGE_PRICE:
      return {
        ...state,
        price: action.price,
      }
    case CHANGE_PERIOD:
      return {
        ...state,
        period: action.period,
      }
    case CHANGE_SHIPPING_AREA:
      return {
        ...state,
        shippingArea: action.shippingArea,
      }
    case CHANGE_DAYS:
      return {
        ...state,
        days: action.days,
      }
    case INITIALIZE_SHARE_FORM:
      return initialState.shareForm  // 初期状態を返す
    default:
      return state
  }
}

export default shareFormReducer;
