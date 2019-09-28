import { connect } from 'react-redux';
import ShareScreen from '../components/ShareScreen/index';
import {
  changeProductName,
  setProductImgUrl,
  changeDescription,
  changePrice,
  changePeriod,
  changeShippingArea,
  changeDays,
  initializeShareForm,
} from '../actions/index';

const mapStateToProps = ({ share, user }) => ({
  productName: share.productName,
  productImgUrl: share.productImgUrl,
  description: share.description,
  price: share.price,
  period: share.period,
  shippingArea: share.shippingArea,
  days: share.days,
  id: user.userInfor.id,
  isLogin: user.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  changeProductName(productName) {
    dispatch(changeProductName(productName));
  },
  setProductImgUrl(productImgUrl) {
    dispatch(setProductImgUrl(productImgUrl));
  },
  changeDescription(description) {
    dispatch(changeDescription(description));
  },
  changePrice(price) {
    dispatch(changePrice(price));
  },
  changePeriod(period) {
    dispatch(changePeriod(period));
  },
  changeShippingArea(shippingArea) {
    dispatch(changeShippingArea(shippingArea));
  },
  changeDays(days) {
    dispatch(changeDays(days));
  },
  initializeShareForm() {
    dispatch(initializeShareForm());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ShareScreen);
