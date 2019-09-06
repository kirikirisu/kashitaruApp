import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';
import firebase from '../../firebaseWithConfig';

// import AlreadySignInScreen from '../alreadySignInScreen/index';

class SignInForm extends React.Component {

  signInWithEmailAndPassword = () => {
    const { store, toggleSignIn, initializeSignInForm } = this.props;
    const { signInMailAddress, signInPassword } = store.signInForm;

    firebase.auth().signInWithEmailAndPassword(signInMailAddress, signInPassword)
      .then(() => {
        toggleSignIn();
        initializeSignInForm();
      })
      .catch(function (error) {
        console.log(error)
        initializeSignInForm();
      });
  }

  render() {

    const { store, changeSignInMailAddress, changeSignInPassword } = this.props;
    const { signInMailAddress, signInPassword } = store.signInForm;

    return (
      <div className="container">
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
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
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
    );
  }
};

export default SignInForm;
