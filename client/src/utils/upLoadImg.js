import firebase from '../firebaseWithConfig';

const upLoadImg = (e, rest) => {
  const { files } = e.target;

  if (files.length > 0) {
    const file = files[0];                                   // 入力された画像を取得
    const fileName = file.name;　　　　　　　　　　　　　　　　　// 入力された画像の名前を取得
    upLoad(file, fileName, rest);
  } else {
    console.log('no data');
  }
};

const upLoad = (imgData, fileName, rest) => {
  const { setImg } = rest;
  const storageRef = firebase.storage().ref();
  const cloudStoragePath = storageRef.child(`${fileName}`); // firebaseで保存するパスを設定、今回はfirebaseの方にフォルダを作らない
  cloudStoragePath.put(imgData).then((snapshot) => { // firebaseに保存
    cloudStoragePath.getDownloadURL().then((url) => { // 保存したらその画像のurlを入手
      setImg(url); // urlをステートに保存
    }).catch((error) => {
      console.log(error);
    });
  });
};

export default upLoadImg;
