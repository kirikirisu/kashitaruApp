import { connect } from 'react-redux';
import SharePage from '../Component/sharePageScreen/index';
import {
  changeProductName,
  setProductImgUrl,
  changeDescription,
  changePrice,
  changePeriod,
  changeShippingArea,
  changeDays,
  initializeShareForm
} from '../Action/index';

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    store: state,
  };
};

const mapDispatchToProps = dispatch => ({
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


export default connect(mapStateToProps, mapDispatchToProps)(SharePage);
