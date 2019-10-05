# kashitaruApp
## 概要
ものの貸し借りができるサービスがあまりなく、特に自分自身が体験したことから工具が貸し借りできるサービスがあれば面白そうだと感じた。
工具を貸し借りできるアイデアとして[こちら](https://kougusharing.storeinfo.jp/)のアイデアがあるが、これを参考に使いやすい工具の貸し借りができるアプリを作る。勉強も兼ねていろんな機能や技術を取り入れていきたい。
## 使用技術
- node
- react & redux
- sql
- firebase(Authentication, Storage)
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

## チャット機能
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

## テスト
create-react-appでjestとenzymeを使ってテストをする際の環境構築
[create-react-app公式](https://create-react-app.dev/docs/running-tests)
そもそものテストの仕方は別で調べる必要がある
[enzyme公式](https://airbnb.io/enzyme/docs/api/)

## 感想
アクションの名前の付け方を最初から決めておけばよかった
画面の数や機能を最初にある程度決めておけばよかった
チャットアイコンを押したらリダイレクトするだけなのに、なぜかアイコンを押したらブール値のトグルによってリダイレクトをするようにしてしまった。