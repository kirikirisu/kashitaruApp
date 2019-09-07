import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Input } from '@material-ui/core';
import firebase from '../../firebaseWithConfig';
import axios from 'axios';

class SettingProfilePage extends React.Component {

  onFileChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      let file = files[0];                                   // 入力された画像を取得
      const fileName = file.name;　　　　　　　　　　　　　　　　　// 入力された画像の名前を取得
      this.upLoadToFirebase(file, fileName);
    } else {
      console.log('no data')
    }
  };

  upLoadToFirebase = (imgData, fileName) => {
    const { setAvatarImg } = this.props;
    let storageRef = firebase.storage().ref();
    let cloudStoragePath = storageRef.child(`${fileName}`);      // firebaseで保存するパスを設定、今回はfirebaseの方にフォルダを作らない
    cloudStoragePath.put(imgData).then((snapshot) => {           // firebaseに保存

      cloudStoragePath.getDownloadURL().then(url => {            // 保存したらその画像のurlを入手
        setAvatarImg(url);　　　　　　　　　　　　　　　　　　　　　    // urlをステートに保存
      }).catch(error => {
        console.log(error);
      });

    });
  };

  sendProfileData = () => {
    const { store, getUserInformation } = this.props;
    const { profileName, profileComment, avatarImg } = store.settingProfileForm;　　　　// firebaseへのアップロードに少し時間がかかるため、ファイルを選択してからすぐに更新ボタンを押されるとavatarImgにurlが入らない

    firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        axios.post('/api/updateUser', {
          idToken,                           // サーバ側でアクセストークンを元にuidを生成
          profileName,
          profileComment,
          avatarImg
        })
          .then(response => {
            console.log(response.data);
            const userInformation = response.data;
            getUserInformation(userInformation);
          })
          .catch(err => {
            console.error(new Error(err))
          })
      }).catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { store, changeProfileName, changeProfileComment } = this.props;
    const { profileName, profileComment, avatarImg } = store.settingProfileForm;
    console.log(avatarImg);
    return (
      <div className="container">
        <ValidatorForm
          ref="form"
          onSubmit={this.sendProfileData}
          onError={errors => console.log(errors)}
        >
          <div className="inputs">
            <TextValidator
              label="名前"
              onChange={e => changeProfileName(e.target.value)}
              value={profileName}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="一言コメント"
              onChange={e => changeProfileComment(e.target.value)}
              value={profileComment}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <p>アイコン</p>
            <Input type="file" multiple="" accept="image/*" onChange={e => this.onFileChange(e)} />
            <br />
            <Button variant="outlined" type='submit'>
              プロフィールを更新
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
};

export default SettingProfilePage;
