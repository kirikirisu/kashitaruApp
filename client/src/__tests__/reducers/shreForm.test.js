import reducer from '../../reducers/share';
import {
  CHANGE_PRODUCTNAME,
  SET_PRODUCT_IMG_URL,
  CHANGE_DESCRIPTION,
  CHANGE_PRICE,
  CHANGE_PERIOD,
  CHANGE_SHIPPING_AREA,
  CHANGE_DAYS,
  INITIALIZE_SHARE_FORM,
} from '../../constants/actionTypes';

describe('shareForm reducer', () => {
  test('初期値を返すこと', () => {
    const state = undefined;
    const action = {};
    const result = reducer(state, action);
    const expected = {
      productName: '',
      productImgUrl: '',
      description: '',
      price: '',
      period: '',
      shippingArea: '',
      days: '',
    };

    expect(result).toEqual(expected);
  });

  test('CHANGE_PRODUCTNAMEが正しく処理されること', () => {
    const state = {
      productName: '',
    };
    const action = {
      type: CHANGE_PRODUCTNAME,
      productName: 'プロダクト名',
    };
    const result = reducer(state, action);
    const expected = {
      productName: action.productName,
    };

    expect(result).toEqual(expected);
  });

  test('SET_PRODUCT_IMG_URLが正しく処理されること', () => {
    const state = {
      productImgUrl: '',
    };
    const action = {
      type: SET_PRODUCT_IMG_URL,
      productImgUrl: 'https://firebasestorage.googleapis.com/v0/b/kashitaru-434fb.appspot.com/o/7c47b5da.jpg?alt=media&token=c5ca5944-f442-40d5-8587-01ca148c9f17',
    };
    const result = reducer(state, action);
    const expected = {
      productImgUrl: action.productImgUrl,
    };

    expect(result).toEqual(expected);
  });

  test('CHANGE_DESCRIPTIONが正しく処理されること', () => {
    const state = {
      description: '',
    };
    const action = {
      type: CHANGE_DESCRIPTION,
      description: '商品の説明',
    };
    const result = reducer(state, action);
    const expected = {
      description: action.description,
    };

    expect(result).toEqual(expected);
  });

  test('CHANGE_PRICEが正しく処理されること', () => {
    const state = {
      price: '',
    };
    const action = {
      type: CHANGE_PRICE,
      price: '価格',
    };
    const result = reducer(state, action);
    const expected = {
      price: action.price,
    };

    expect(result).toEqual(expected);
  });

  test('CHANGE_PERIODがたさしく処理されること', () => {
    const state = {
      period: '',
    };
    const action = {
      type: CHANGE_PERIOD,
      period: '貸し出し期間',
    };
    const result = reducer(state, action);
    const expected = {
      period: action.period,
    };

    expect(result).toEqual(expected);
  });

  test('CHANGE_SHIPPING_AREAが正しく処理されること', () => {
    const state = {
      shippingArea: '',
    };
    const action = {
      type: CHANGE_SHIPPING_AREA,
      shippingArea: '発送地域',
    };
    const result = reducer(state, action);
    const expected = {
      shippingArea: action.shippingArea,
    };

    expect(result).toEqual(expected);
  });

  test('CHANGE_DAYSが正しく処理されること', () => {
    const state = {
      days: '',
    };
    const action = {
      type: CHANGE_DAYS,
      days: '発送までの日数',
    };
    const result = reducer(state, action);
    const expected = {
      days: action.days,
    };

    expect(result).toEqual(expected);
  });

  test('INITIALIZE_SHARE_FORMが正しく処理されること', () => {
    const state = {
      productName: '',
      productImgUrl: '',
      description: '',
      price: '',
      period: '',
      shippingArea: '',
      days: '',
    };
    const action = {
      type: INITIALIZE_SHARE_FORM,
    };
    const result = reducer(state, action);
    const expected = {
      productName: '',
      productImgUrl: '',
      description: '',
      price: '',
      period: '',
      shippingArea: '',
      days: '',
    };
    expect(result).toEqual(expected);
  });
});
