import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';

class ShareForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault()    // フォームsubmit時のデフォルトの動作を抑制

    const {
      store,
      initializeForm,
      receiveDataFailed,
    } = this.props;

    const {
      productName,
      companyName,
      name,
      mailAddress,
      companyAddress,
      comment
    } = store.shareForm;

    axios.post('/api/share', {
      productName,
      companyName,
      name,
      mailAddress,
      companyAddress,
      comment
    })                    // オブジェクトをサーバーにPOST
      .then(response => {
        initializeForm(); // submit後はフォームを初期化
        // console.log(response);
        /*const characterArray = response.data;
        receiveDataSuccess(characterArray);*/
      })
      .catch(err => {
        receiveDataFailed();
        console.error(new Error(err))
      })
  }

  render() {
    const {
      store,
      changeProductName,
      changeCompanyName,
      changeName,
      changeMailAddress,
      changeCompanyAddress,
      changeComment,
    } = this.props;

    const {
      productName,
      companyName,
      name,
      mailAddress,
      companyAddress,
      comment
    } = store.shareForm;

    return (
      <div className="container">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <div className="inputs">
            <TextValidator
              label="シェアリングしたい商品"
              onChange={e => changeProductName(e.target.value)}
              value={productName}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="会社名"
              onChange={e => changeCompanyName(e.target.value)}
              value={companyName}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="名前"
              onChange={e => changeName(e.target.value)}
              value={name}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="メールアドレス"
              onChange={e => changeMailAddress(e.target.value)}
              value={mailAddress}
              validators={['required', 'isEmail']}
              errorMessages={['入力してください', 'メールアドレスを入力してください']}
            />
            <TextValidator
              label="住所"
              onChange={e => changeCompanyAddress(e.target.value)}
              value={companyAddress}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="コメント"
              onChange={e => changeComment(e.target.value)}
              value={comment}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <br />
            <Button variant="outlined" type='submit'>
              送信
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default ShareForm;
