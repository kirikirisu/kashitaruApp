import React from 'react';
import axios from 'axios';

const SharePage = ({ store, changeName, changeAge, initializeForm }) => {
  const { name, age } = store.form;

  const handleSubmit = e => {
    e.preventDefault()    // フォームsubmit時のデフォルトの動作を抑制

    axios.post('/api/characters', {
      name,
      age,
    })  // キャラクターの名前、年齢からなるオブジェクトをサーバーにPOST
      .then(response => {
        console.log(response)  // 後で行う動作確認のためのコンソール出力
        initializeForm() // submit後はフォームを初期化
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
          年齢:
          <input value={age} onChange={e => changeAge(e.target.value)} />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SharePage;