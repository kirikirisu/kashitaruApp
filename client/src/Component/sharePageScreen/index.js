import React from 'react';
import axios from 'axios';

const SharePage = ({
  store,
  changeProductName,
  changeCompanyName,
  changeName,
  changeMailAddress,
  changeCompanyAddress,
  changeComment,
  initializeForm,
  requestData,
  receiveDataSuccess,
  receiveDataFailed,
}) => {

  const {
    productName,
    companyName,
    name,
    mailAddress,
    companyAddress,
    comment
  } = store.shareForm;

  const handleSubmit = e => {
    e.preventDefault()    // フォームsubmit時のデフォルトの動作を抑制

    axios.post('/api/share', {
      productName,
      companyName,
      name,
      mailAddress,
      companyAddress,
      comment
    })                    // オブジェクトをサーバーにPOST
      .then(response => {
        initializeForm(); // submit後はフォームを初期化
        console.log(response);
        /*const characterArray = response.data;
        receiveDataSuccess(characterArray);*/
      })
      .catch(err => {
        receiveDataFailed();
        console.error(new Error(err))
      })
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>


        <label>
          シェアリングしたい商品:
          <input value={productName} onChange={e => changeProductName(e.target.value)} />
        </label>
        <label>
          会社名:
          <input value={companyName} onChange={e => changeCompanyName(e.target.value)} />
        </label>
        <label>
          名前:
          <input value={name} onChange={e => changeName(e.target.value)} />
        </label>
        <label>
          メールアドレス:
          <input value={mailAddress} onChange={e => changeMailAddress(e.target.value)} />
        </label>
        <label>
          住所:
          <input value={companyAddress} onChange={e => changeCompanyAddress(e.target.value)} />
        </label>
        <label>
          コメント:
          <input value={comment} onChange={e => changeComment(e.target.value)} />
        </label>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SharePage;
