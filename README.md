# kashitaruApp
## 概要
夏休み中に何を作ろうか色々考えた結果、[こちら](https://kougusharing.storeinfo.jp/)のアイデアを参考にwebアプリを作ることにした。
node+react+mongodb+reduxでアプリを作るのが初めてのためREADMEに色々まとめながら開発を進めたい。
## アプリの起動
mongodbを起動

```
brew services start mongodb   // mogodbをhomebrewでインストールした場合
brew services list            // 起動しているサービスを確認する
mongo                         // mongodbのシェルを起動
exit                          // mongodbのシェルを閉じる
brew services stop mongodb    // mongodbを停止
```

フロント側とサーバ側二つを起動

```
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
server.jsをbabel.jsによってES6出かけるようにしているが、ES6で@pusher/chatkit-serverを使う場合、

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

## ログイン認証
ログインの際にmongooseのfind()メソッドを使用して、値があったらtrue返し、値がなかったらfalseを返すようにしたが、find()メソッドで返ってくるものは配列のためuser.lengthで値があるかないか判断しなければならない。 if(user === "") や if(user === [])はだめ。
