import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';

class SignUpForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();    // フォームsubmit時のデフォルトの動作を抑制

    const { store, initializeSignUpForm } = this.props;
    const { name, mailAddress } = store.signUpForm;

    axios.post('/api/signUp', {
      name,
      mailAddress,
    })
      .then(response => {
        console.log(response);
        initializeSignUpForm();
        // return <Redirect from='/signIn' to='/' /> このタイミングでログインページにリダイレクトさせたい
      })
      .catch(err => {
        console.error(new Error(err))
      })
  }

  render() {

    const { store, changeName, changeMailAddress } = this.props;
    const { name, mailAddress } = store.signUpForm;

    return (
      <div className="container">
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <div className="inputs">
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
              errorMessages={['メールアドレスを入力してください', 'string is not valid']}
            />
            <br />
            <Button variant="outlined" type='submit'>
              アカウントを作る
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
};

export default SignUpForm;
