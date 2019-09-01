import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';
import AlreadySignInScreen from '../alreadySignInScreen/index';

class SignInForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();    // フォームsubmit時のデフォルトの動作を抑制

    const {
      store,
      initializeSignInForm,
      signInDidSuccess
    } = this.props;

    const { signInName, signInMailAddress } = store.signInForm;

    axios.post('/api/signIn', {
      signInName,
      signInMailAddress,
    })
      .then(response => {
        const userInformations = response.data
        // console.log(userInformations);
        signInDidSuccess(userInformations); // ログインしたユーザー情報とログイン情報をstateにセットする
        initializeSignInForm();
      })
      .catch(err => {
        console.error(new Error(err))
      })
  }

  render() {

    const { store, changeSignInName, changeSignInMailAddress } = this.props;
    const isLogin = store.userInformations.isLogin;
    const { signInName, signInMailAddress } = store.signInForm;

    return (
      <div>
        {isLogin              // isLoginで分岐
          ? <AlreadySignInScreen />　　　　　　　　　// isLoginがtrueだったらAlreadyページ
          : <div className="container">
            {(isLogin === null)                   // true以外でnullだったら
              ? <p>ログインしましょう</p>
              : <p>ログイン失敗</p>　　　　　　　　　　// trueでもnullでもない
            }
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
            >
              <div className="inputs">
                <TextValidator
                  label="名前"
                  onChange={e => changeSignInName(e.target.value)}
                  value={signInName}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <TextValidator
                  label="メールアドレス"
                  onChange={e => changeSignInMailAddress(e.target.value)}
                  value={signInMailAddress}
                  validators={['required', 'isEmail']}
                  errorMessages={['メールアドレスを入力してください', 'string is not valid']}
                />
                <br />
                <Button variant="outlined" type='submit'>
                  ログイン
              </Button>
              </div>
            </ValidatorForm>
          </div>
        }
      </div>
    );
  }
};

export default SignInForm;
