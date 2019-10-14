import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import firebase from '../../firebaseWithConfig';
import './style.css';

class SignUpScreen extends React.Component {
  createUserForLoginWithEmailAndPassword = () => {
    const {
      password,
      mailAddress,
      initializeSignUpForm,
      signUpFailed,
    } = this.props;

    firebase.auth().createUserWithEmailAndPassword(mailAddress, password) // 入力されたメールとパスワードでfirebaseにアカウントを作る
      .then((userCredentials) => { // アカウント作成が成功すると自動でそのアカウントはログイン状態になる　　　　　   
        userCredentials.user.getIdToken(true) // アクセストークンを入手、trueで自動でキャッシュを削除してくれる(forceRefresh)
          .then((idToken) => {                   // アクセストークンをサーバーにリクエスト
            axios.post('/api/setUid', {
              idToken,                           // サーバ側でアクセストークンを元にログインしたユーザのユニークキーを入手し保存
            })
              .then((response) => {
                console.log(response);
                initializeSignUpForm();
              })
              .catch((err) => {
                console.error(new Error(err));
              });
          }).catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        signUpFailed(errorMessage);
      });
  }

  logout = () => {
    firebase.auth().signOut();
  }

  render() {
    const {
      password,
      mailAddress,
      errorMessage,
      changePassword,
      changeMailAddress,
    } = this.props;

    return (
      <div>
        <div>{errorMessage}</div>
        <div className="container">
          <ValidatorForm
            onSubmit={this.createUserForLoginWithEmailAndPassword}
            onError={(errors) => console.log(errors)}
          >
            <div className="inputs">
              <TextValidator
                label="メール"
                onChange={(e) => changeMailAddress(e.target.value)}
                value={mailAddress}
                validators={['required', 'isString']}
                errorMessages={['入力してください', 'string is not valid']}
              />
              <TextValidator
                label="パスワード"
                onChange={(e) => changePassword(e.target.value)}
                value={password}
                validators={['required', 'isString']}
                errorMessages={['入力してください', 'string is not valid']}
              />
              <br />
              <Button variant="outlined" type="submit">
                アカウントを作る
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

export default SignUpScreen;
