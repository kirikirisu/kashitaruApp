import React from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import upLoadImg from '../../utils/upLoadImg';
import './style.css';

class ShareScreen extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const {
      productName,
      productImgUrl,
      description,
      price,
      period,
      shippingArea,
      days,
      initializeShareForm,
      id,
    } = this.props;

    axios.post(`${process.env.REACT_APP_PROXY}/api/share`, {
      id,
      productName,
      productImgUrl,
      description,
      price,
      period,
      shippingArea,
      days,
    })
      .then((response) => {
        console.log(response.data);
        initializeShareForm();
      })
      .catch((err) => {
        console.error(new Error(err));
      });
  }

  renderShareScreen = () => {
    const {
      productName,
      description,
      price,
      period,
      shippingArea,
      days,
      changeProductName,
      changeDescription,
      changePrice,
      changePeriod,
      changeShippingArea,
      changeDays,
      ...rest
    } = this.props;
    return (
      <div className="container">
        <ValidatorForm
          onSubmit={this.handleSubmit}
          onError={(errors) => console.log(errors)}
        >
          <div className="inputs">
            <TextValidator
              label="シェアリングしたい商品"
              onChange={(e) => changeProductName(e.target.value)}
              value={productName}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <div>商品画像</div>
            <Input type="file" multiple="" accept="image/*" onChange={(e) => upLoadImg(e, rest)} />
            <TextValidator
              label="商品説明"
              onChange={(e) => changeDescription(e.target.value)}
              value={description}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="価格"
              onChange={(e) => changePrice(e.target.value)}
              value={price}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="貸し出し期間"
              onChange={(e) => changePeriod(e.target.value)}
              value={period}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="発送元"
              onChange={(e) => changeShippingArea(e.target.value)}
              value={shippingArea}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="発想までの日数"
              onChange={(e) => changeDays(e.target.value)}
              value={days}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <br />
            <Button variant="outlined" type="submit">
              シェア
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  };

  render() {
    const { isLogin } = this.props;

    return (
      <Route
        render={() => (
          isLogin ? (
            this.renderShareScreen()
          ) : (
              <Redirect to="signIn" />) // ログインしてなければログインページリダイレクト
        )}
      />
    );
  }
}

export default ShareScreen;
