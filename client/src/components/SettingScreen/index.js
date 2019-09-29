import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Input } from '@material-ui/core';
import firebase from '../../firebaseWithConfig';
import upLoadImg from '../../utils/upLoadImg';

class SettingScreen extends React.Component {
  sendProfileData = () => {
    const {
      profileName,
      profileComment,
      avatarImg,
      getUserInformation,
    } = this.props; // firebaseへのアップロードに少し時間がかかるため、ファイルを選択してからすぐに更新ボタンを押されるとavatarImgにurlが入らない

    firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        axios.post('/api/updateUser', {
          idToken,                           // サーバ側でアクセストークンを元にuidを生成
          profileName,
          profileComment,
          avatarImg,
        })
          .then((response) => {
            console.log(response.data);
            const userInformation = response.data;
            getUserInformation(userInformation);         // 更新されたユーザープロフィール情報をステートに保存
          })
          .catch((err) => {
            console.error(new Error(err));
          });
      }).catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      profileName,
      profileComment,
      changeProfileName,
      changeProfileComment,
      ...rest
    } = this.props;

    return (
      <div className="container">
        <ValidatorForm
          ref="form"
          onSubmit={this.sendProfileData}
          onError={(errors) => console.log(errors)}
        >
          <div className="inputs">
            <TextValidator
              label="名前"
              onChange={(e) => changeProfileName(e.target.value)}
              value={profileName}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <TextValidator
              label="一言コメント"
              onChange={(e) => changeProfileComment(e.target.value)}
              value={profileComment}
              validators={['required', 'isString']}
              errorMessages={['入力してください', 'string is not valid']}
            />
            <p>アイコン</p>
            <Input type="file" multiple="" accept="image/*" onChange={(e) => upLoadImg(e, rest)} />
            <br />
            <Button variant="outlined" type="submit">
              プロフィールを更新
            </Button>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default SettingScreen;
