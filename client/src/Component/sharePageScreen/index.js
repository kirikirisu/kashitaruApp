import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './style.css';
import PromptGoAnyScreen from '../promptGoAnyScreen';
import { Input } from '@material-ui/core';
import firebase from '../../firebaseWithConfig';

class ShareForm extends React.Component {

  onFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      let file = files[0];                                   // 入力された画像を取得
      const fileName = file.name;　　　　　　　　　　　　　　　　　// 入力された画像の名前を取得
      this.upLoadToFirebase(file, fileName);                 // 入力された画像をfirebaseにアップロード
    } else {
      console.log('no data')
    }
  };

  upLoadToFirebase = (imgData, fileName) => {
    const { setProductImgUrl } = this.props;
    let storageRef = firebase.storage().ref();
    let cloudStoragePath = storageRef.child(`${fileName}`);      // firebaseで保存するパスを設定、今回はfirebaseの方にフォルダを作らない
    cloudStoragePath.put(imgData).then((snapshot) => {           // firebaseに保存

      cloudStoragePath.getDownloadURL().then(url => {            // 保存したらその画像のurlを入手
        setProductImgUrl(url);　　　　　　　　　　　　　　　　　　　　　    // urlをステートに保存
      }).catch(error => {
        console.log(error);
      });
    });
  };

  handleSubmit = e => {
    e.preventDefault();    // フォームsubmit時のデフォルトの動作を抑制

    const { store, initializeShareForm } = this.props;
    const {
      productName,
      productImgUrl,
      description,
      price,
      period,
      shippingArea,
      days,
    } = store.shareForm;

    const { id } = store.userInformations.userInfor;

    axios.post('/api/share', {
      id,
      productName,
      productImgUrl,
      description,
      price,
      period,
      shippingArea,
      days,
    })
      .then(response => {
        console.log(response.data);
        initializeShareForm();
      })
      .catch(err => {
        console.error(new Error(err))
      })

  }

  render() {
    const {
      store,
      changeProductName,
      changeDescription,
      changePrice,
      changePeriod,
      changeShippingArea,
      changeDays,
    } = this.props;

    const {
      productName,
      description,
      price,
      period,
      shippingArea,
      days,
    } = store.shareForm;

    const isLogin = store.userInformations.isLogin;

    return (
      <div>
        {isLogin                                // trueだったらシェアページを返す
          ? <div className="container">
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
            >
              <div className="inputs">
                <TextValidator
                  label="シェアリングしたい商品"
                  onChange={e => changeProductName(e.target.value)}
                  value={productName}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <div>商品画像</div>
                <Input type="file" multiple="" accept="image/*" onChange={e => this.onFileChange(e)} />
                <TextValidator
                  label="商品説明"
                  onChange={e => changeDescription(e.target.value)}
                  value={description}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <TextValidator
                  label="価格"
                  onChange={e => changePrice(e.target.value)}
                  value={price}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <TextValidator
                  label="貸し出し期間"
                  onChange={e => changePeriod(e.target.value)}
                  value={period}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <TextValidator
                  label="発送元"
                  onChange={e => changeShippingArea(e.target.value)}
                  value={shippingArea}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <TextValidator
                  label="発想までの日数"
                  onChange={e => changeDays(e.target.value)}
                  value={days}
                  validators={['required', 'isString']}
                  errorMessages={['入力してください', 'string is not valid']}
                />
                <br />
                <Button variant="outlined" type='submit'>
                  シェア
                </Button>
              </div>
            </ValidatorForm>
          </div>
          : <PromptGoAnyScreen p='ログインしてください' to='/signIn' btn='ログインページへ' />
        }
      </div>
    );
  }
}

export default ShareForm;
