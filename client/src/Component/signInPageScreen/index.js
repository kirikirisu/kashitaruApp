import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';
import firebase from '../../firebaseWithConfig';
import AlreadySignInScreen from '../alreadySignInScreen/index';

class SignInForm extends React.Component {

  signInWithEmailAndPassword = () => {
    const { store, toggleSignIn, initializeSignInForm } = this.props;
    const { signInMailAddress, signInPassword } = store.signInForm;

    firebase.auth().signInWithEmailAndPassword(signInMailAddress, signInPassword)
      .then(() => {
        toggleSignIn();                                 // ユーザをログイン状態にし、
        initializeSignInForm();
        this.getUserInformation();                      // そのユーザのプロフィール情報を持ってくる。
      })
      .catch(function (error) {
        console.log(error)
        initializeSignInForm();
      });
  }

  getUserInformation = () => {
    const { getUserInformation } = this.props;
    firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        axios.post('/api/getUserInformation', {
          idToken,                           // サーバ側でアクセストークンを元にuidを生成 // uidは現在ログインしているユーザーのユニークキー
        })
          .then(response => {
            const userInformation = response.data;
            getUserInformation(userInformation);
          })
          .catch(err => {
            console.error(new Error(err))
          })
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {

    const { store, changeSignInMailAddress, changeSignInPassword } = this.props;
    const { signInMailAddress, signInPassword } = store.signInForm;
    const { isLogin } = store.userInformations;

    return (
      <div>{isLogin
        ? <AlreadySignInScreen />
        : <div className="container">
          <ValidatorForm
            ref="form"
            onSubmit={this.signInWithEmailAndPassword}
            onError={errors => console.log(errors)}
          >
            <div className="inputs">
              <TextValidator
                label="メール"
                onChange={e => changeSignInMailAddress(e.target.value)}
                value={signInMailAddress}
                validators={['required', 'isEmail']}
                errorMessages={['入力してください', 'メールアドレスを入力してください']}
              />
              <TextValidator
                label="パスワード"
                onChange={e => changeSignInPassword(e.target.value)}
                value={signInPassword}
                validators={['required', 'isString']}
                errorMessages={['入力してください', 'string is not valid']}
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
