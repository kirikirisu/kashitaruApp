import * as types from '../../constants/actionTypes';
import * as actions from '../../actions/index';

describe('shareForm actions', () => {
  test('プロダクト名を変更するアクションが生成されること', () => {
    const productName = 'プロダクト名';
    const expected = {
      type: types.CHANGE_PRODUCTNAME,
      productName,
    };
    expect(actions.changeProductName(productName)).toEqual(expected);
  });

  test('プロダクト画像を変更するアクションが生成されること', () => {
    const productImgUrl = 'https://firebasestorage.googleapis.com/v0/b/kashitaru-434fb.appspot.com/o/7c47b5da.jpg?alt=media&token=c5ca5944-f442-40d5-8587-01ca148c9f17';
    const expected = {
      type: types.SET_PRODUCT_IMG_URL,
      productImgUrl,
    };
    expect(actions.setProductImgUrl(productImgUrl)).toEqual(expected);
  });

  test('説明文を変更するアクションが生成されること', () => {
    const description = '説明文';
    const expected = {
      type: types.CHANGE_DESCRIPTION,
      description,
    };
    expect(actions.changeDescription(description)).toEqual(expected);
  });

  test('価格を変更するアクションが発行されること', () => {
    const price = '価格';
    const expected = {
      type: types.CHANGE_PRICE,
      price,
    };
    expect(actions.changePrice(price)).toEqual(expected);
  });

  test('貸し出し期間を変更するアクションが発行されること', () => {
    const period = '貸し出し期間';
    const expected = {
      type: types.CHANGE_PERIOD,
      period,
    };
    expect(actions.changePeriod(period)).toEqual(expected);
  });

  test('発送地域を変更するアクションが発行されること', () => {
    const shippingArea = '発送地域';
    const expected = {
      type: types.CHANGE_SHIPPING_AREA,
      shippingArea,
    };
    expect(actions.changeShippingArea(shippingArea)).toEqual(expected);
  });

  test('発送までの日数を変更するアクションが発行されること', () => {
    const days = '発送までの日数';
    const expected = {
      type: types.CHANGE_DAYS,
      days,
    };
    expect(actions.changeDays(days)).toEqual(expected);
  });

  test('シェアフォームを初期化するアクションが発行されること', () => {
    const expected = {
      type: types.INITIALIZE_SHARE_FORM,
    };
    expect(actions.initializeShareForm()).toEqual(expected);
  });
});
