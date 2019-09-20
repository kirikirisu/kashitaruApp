import React from 'react';
import axios from 'axios';
import Chatkit from '@pusher/chatkit-client';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';
import firebase from '../../firebaseWithConfig';
import AlreadySignInScreen from '../alreadySignInScreen/index';
import PromptGoAnyScreen from '../promptGoAnyScreen/index';

class SignInForm extends React.Component {
  signInWithEmailAndPassword = () => {
    const {
      signInMailAddress,
      signInPassword,
      toggleSignIn,
      initializeSignInForm,
    } = this.props;

    firebase.auth().signInWithEmailAndPassword(signInMailAddress, signInPassword)
      .then(() => {
        toggleSignIn(); // ユーザをログイン状態にし、
        initializeSignInForm();
        this.getUserInformation(); // そのユーザのプロフィール情報を持ってくる。
      })
      .catch((error) => {
        console.log(error);
        initializeSignInForm();
      });
  }

  getUserInformation = () => {
    const { getUserInformation } = this.props;
    firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        axios.post('/api/getUserInformation', {
          idToken, // サーバ側でアクセストークンを元にuidを生成 // uidは現在ログインしているユーザーのユニークキー
        })
          .then((response) => {
            const userInformation = response.data;
            getUserInformation(userInformation); // ユーザー情報をステートに保存
            this.generationChatInstance();
          })
          .catch((err) => {
            console.error(new Error(err));
          });
      }).catch((error) => {
        console.log(error);
      });
  }

  generationChatInstance = () => {
    const { name } = this.props;

    if (name === null || name.trim() === '') { // ユーザーの名前がなかったらプロフィール設定へ
      return (
        <PromptGoAnyScreen p="プロフィールを設置しましょう" to="/settingProfile" btn="プロフィール設置画面へ" />
      );
    }
    return this.connectToChatkit(name);
  };

  connectToChatkit = (userId) => { // chatkitインスタンスにログインしたユーザを接続
    const {
      addRoom,
      setCurrentUser,
      setRooms,
    } = this.props;
    axios
      .post('/users', { userId })
      .then(() => {
        const tokenProvider = new Chatkit.TokenProvider({
          url: '/authenticate',
        });

        const chatManager = new Chatkit.ChatManager({
          instanceLocator: 'v1:us1:9e301a0d-2903-4793-b4ed-8506fa045cbe',
          userId,
          tokenProvider,
        });

        return chatManager
          .connect({
            onAddedToRoom: (room) => {
              addRoom(room);
            },
          })
          .then((currentUser) => {
            setCurrentUser(currentUser);
            setRooms(currentUser.rooms);
          });
      })
      .catch(console.error);
  }

  render() {
    const {
      signInMailAddress,
      signInPassword,
      changeSignInMailAddress,
      changeSignInPassword,
      isLogin,
    } = this.props;

    return (
      <div>
        {isLogin
          ? <AlreadySignInScreen />
          : (
            <div className="container">
              <ValidatorForm
                ref="form"
                onSubmit={this.signInWithEmailAndPassword}
                onError={(errors) => console.log(errors)}
              >
                <div className="inputs">
                  <TextValidator
                    label="メール"
                    onChange={(e) => changeSignInMailAddress(e.target.value)}
                    value={signInMailAddress}
                    validators={['required', 'isEmail']}
                    errorMessages={['入力してください', 'メールアドレスを入力してください']}
                  />
                  <TextValidator
                    label="パスワード"
                    onChange={(e) => changeSignInPassword(e.target.value)}
                    value={signInPassword}
                    validators={['required', 'isString']}
                    errorMessages={['入力してください', 'string is not valid']}
                  />
                  <br />
                  <Button variant="outlined" type="submit">
                    ログイン
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          )}
      </div>
    );
  }
}

export default SignInForm;
