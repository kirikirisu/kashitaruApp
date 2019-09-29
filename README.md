# kashitaruApp
## 概要
夏休み中に何を作ろうか色々考えた結果、[こちら](https://kougusharing.storeinfo.jp/)のアイデアを参考にwebアプリを作ることにした。
node+react+sql+reduxでアプリを作るのが初めてのためREADMEに色々まとめながら開発を進めたい。
## アプリの起動
sqlを起動

```
brew services start sql@5.6   // sqlをhomebrewでインストールした場合
brew services list            // 起動しているサービスを確認する
mysql -u arakappa -p          // sqlのシェルを起動
exit                          // sqlのシェルを閉じる
brew services stop sql@5.6    // sqlを停止
```

バックエンド側　
.envファイルを作成し、以下のフォーマットでCHATKITのキーとインスタンスロケータを入力

```
PORT = hoge
CHATKIT_INSTANCE_LOCATOR = hoge
CHATKIT_SECRET_KEY = huga
```

フロントエンド側
.envファイルを作成し、以下のフォーマットでfirebaseのキーなどを入力
create-react-appでプロジェクトを作成した場合、dotenvモジュールをインストールする必要はない、REACT_APP_で宣言しなければならない

```
REACT_APP_FIREBASE_KEY = "hoge"
REACT_APP_AUTH_DOMAIN = "hoge"
REACT_APP_DATABASE_URL = "hoge"
REACT_APP_PROJECT_ID = "hoge"
REACT_APP_MESSAGINGSENDER_ID = "hoge"
REACT_APP_APP_ID = "hoge"
REACT_APP_STORAGE_BUCKET = "hoge"
```

フロント側とサーバ側二つを起動

```
npm install
cd kashitaruApp
npm start                     // サーバ側起動

cd kashitaruApp/client
npm start                     // フロント側起動
```

## material-uiでreact-router-domを使う
- [buttonコンポーネントから遷移する場合](https://material-ui.com/components/buttons/#third-party-routing-library)
- [シンプルな遷移方法](https://material-ui.com/components/links/#third-party-routing-library)今回はこっちを使用
- [Drawerのリストの遷移](https://material-ui.com/guides/composition/#component-property)とりあえず使用

## useEffectについて
rentPageでuseEffectを使用しているが、useEffect内で非同期処理をする場合、二つ目の引数に空の配列を渡す必要がある。そうしないと無限ループしてしまう。

## @pusher/chatkit-serverについて
server.jsをbabel.jsによってES6でかけるようにしているが、ES6で@pusher/chatkit-serverを使う場合、

```
const Chatkit = require('@pusher/chatkit-server')

const chatkit = new Chatkit.default({
  instanceLocator: "v1:us1-staging:...",
  key: "9f0ae37c-1310-4fb2-b517...",
})
```

の「.default」を省略できる。[ここを参照](https://github.com/pusher/chatkit-server-node/issues/12)

## チャットについて
- チャットAPIに[Pusher](https://pusher.com/)のCHATKITを使用
- ダイレクトメッセージチャットを作るのは初めてだったが[サンプル](https://pusher.com/tutorials/react-direct-messaging)を参考に実装
### connectToRoom.js
この関数には7個のアクションと二つのステートを渡す必要がる。reduxにコンテナされた親から子にこれらを渡す場合、[スプレッド構文](https://qiita.com/akisx/items/682a4283c13fe336c547)を使うことでまとめて渡すことができる。currentUserとcurrentRoomというステートでcurrentRoomだけアクションたちとまとめて渡しているのは、ログインしてチャットキットインスタンスから返ってきたcurrentUserをステートに保存するのを待たずにそのままこの関数の引数として渡したいから。

## uidの使い道
firebase認証にしていなかった時は名前とメールアドレスの二つによってユーザを判断していたが、それがuid一つで済むようになる。uidの管理に気をつける必要があり、クライアントではuidを絶対に発行せず、アクセストークンを発行しそれを元にサーバーでfirebaseからuidを入手しなければならない。

## プロフィール画面
ログインした時にユーザ情報を持ってきているため、ログインしていなければプロフィール画面は見ることができない。

## utilsフォルダ
共通化したものを入れていく

## 

