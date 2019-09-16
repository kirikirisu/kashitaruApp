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
REACT_APP_PROJECT_ID = "kashitaru-434fb"
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

## ChatAppComponentについて
- チャットAPIに[Pusher](https://pusher.com/)のCHATKITを使用
- ダイレクトメッセージチャットを作るのは初めてのため[サンプル](https://pusher.com/tutorials/react-direct-messaging)をほとんどパクる。チャットにもreduxを導入予定。
### チャットの流れ
#### methods.js/connectToChatkit()
まず最初に、ユーザーをChatkitインスタンスに接続する前に、ユーザーを識別する必要がある。ユーザー名の入力を求め、そのユーザー名をサーバーに（/usersルートに）送信し、存在しない場合はChatkitユーザーを作成する。そして次に、ユーザー情報やルームのIDを元にChatkitインスタンスを作成する。Chatkitインスタンスを作成するとconnect()メソッドが呼び出さる。このメソッドはオブジェクト(currentUser)を生成し、このオブジェクトはChatkitインスタンスとやり取りができる。
#### methods.js/connectToRoom()
connectToChatkit()が実行されるとconnectToRoom()も実行される。これは作成された部屋にユーザーを入れる。
#### methods.js/


## 複雑なif文の省略
[ここを](https://qiita.com/Slowh/items/5a95943824802221f2da)参考

## uidの使い道
firebase認証にしていなかった時は名前とメールアドレスの二つによってログインしているユーザを判断していたが、それがuid一つで済むようになる。uidの管理がセキュリティに気をつける必要があり、クライアントではuidを絶対に発行せず、アクセストークンを発行しそれを元にサーバーでfirebaseからuidを入手しなければならない。

## プロフィール画面
プロフィール画面ではまずユーザの名前が登録されているかどうかで分岐、登録されていない場合プロフィール設定画面をログインしていれば表示する。
ログインした時にユーザ情報を持ってきているため、ログインしていなければプロフィール画面は見ることができない。