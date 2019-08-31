import React from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

const SignUpForm = ({ store, changeName, changeMailAddress, initializeSignUpForm }) => {
  const { name, mailAddress } = store.signUpForm;

  const handleSubmit = e => {
    e.preventDefault()    // フォームsubmit時のデフォルトの動作を抑制

    axios.post('/api/signUp', {
      name,
      mailAddress,
    })
      .then(response => {
        console.log(response);
        initializeSignUpForm();
        // return <Redirect from='/signIn' to='/' /> このタイミングでリダイレクトさせたい
      })
      .catch(err => {
        console.error(new Error(err))
      })
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          名前:
          <input value={name} onChange={e => changeName(e.target.value)} />
        </label>
        <label>
          メールアドレス:
          <input value={mailAddress} onChange={e => changeMailAddress(e.target.value)} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SignUpForm;
