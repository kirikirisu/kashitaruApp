import React from 'react';
import axios from 'axios';

const SignInForm = ({ store, changeSignInName, changeSignInMailAddress, initializeSignInForm, signInDidSuccess }) => {
  const { signInName, signInMailAddress } = store.signInForm;

  const handleSubmit = e => {
    e.preventDefault()    // フォームsubmit時のデフォルトの動作を抑制

    axios.post('/api/signIn', {
      signInName,
      signInMailAddress,
    })
      .then(response => {
        const userInformations = response.data
        console.log(userInformations);
        signInDidSuccess(userInformations);
        initializeSignInForm();
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
          <input value={signInName} onChange={e => changeSignInName(e.target.value)} />
        </label>
        <label>
          メールアドレス:
          <input value={signInMailAddress} onChange={e => changeSignInMailAddress(e.target.value)} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SignInForm;
