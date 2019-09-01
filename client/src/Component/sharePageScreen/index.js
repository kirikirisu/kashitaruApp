import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';
import PromptSignInScreen from '../promptSignInScreen';

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
      companyAddress,
      comment
    } = store.shareForm;

    const { name, mailAddress } = store.userInformations.userInfor;

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
      changeComment,
    } = this.props;

    const {
      productName,
      companyName,
      comment
    } = store.shareForm;

    const { name, mailAddress } = store.userInformations.userInfor;

    const isLogin = store.userInformations.isLogin;

    return (
      <div>
        {isLogin
          ? <div className="container">
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
                  value={name}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <TextValidator
                  label="メールアドレス"
                  value={mailAddress}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'メールアドレスを入力してください']}
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
          : <PromptSignInScreen />
        }
      </div>
    );
  }
}

export default ShareForm;
