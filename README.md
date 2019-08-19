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


