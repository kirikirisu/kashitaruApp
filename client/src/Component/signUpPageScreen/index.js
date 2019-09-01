import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';

class SignUpForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();    // フォームsubmit時のデフォルトの動作を抑制

    const { store, initializeSignUpForm, sameUserExist } = this.props;
    const { name, mailAddress } = store.signUpForm;

    axios.post('/api/signUp', {
      name,
      mailAddress,
    })
      .then(response => {
        const { isExistUser } = response.data;
        // console.log(isExistUser);
        initializeSignUpForm();      // これを先しないとstateのisExisUserも初期化される
        sameUserExist(isExistUser);   // フォームを初期化した後、isExisUserを変更
        // return <Redirect from='/signIn' to='/' /> このタイミングでログインページにリダイレクトさせたい
      })
      .catch(err => {
        console.error(new Error(err))
      })
  }

  render() {

    const { store, changeName, changeMailAddress } = this.props;
    const { name, mailAddress, isExistUser } = store.signUpForm;

    return (
      <div className="container">
        {
          (isExistUser === null)                    // nullの場合
            ? <p>アカウントを作る</p>
            : (isExistUser)                         // trueの場合
              ? <p>すでに存在しているアカウントです</p>
              : <p>アカウントを作りました！！</p>       // それ以外の場合(falseの場合)
        }
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
