import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import Chatkit from '@pusher/chatkit-server';
import * as admin from 'firebase-admin';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const app = express();
const port = process.env.PORT;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'arakappa',
  password: process.env.DATABASE_PASSWORD,
  database: 'kashitaru',
});
connection.connect();


admin.initializeApp({                                       // Admin SDKを初期化
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://kashitaru-434fb.firebaseio.com"
});

const chatkit = new Chatkit({
  instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
  key: process.env.CHATKIT_SECRET_KEY,
});


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/api/share', (request, response) => {
  const {
    productName,
    companyName,
    name,
    password,
    comment
  } = request.body;

  let Share = new shareInformation({
    productName: productName,
    companyName: companyName,
    name: name,
    password: password,
    comment: comment,
  });

  Share.save((err, share) => {
    if (err) return console.error(err);
    response.status(200).send(`successfully!!`);
  });

});

app.get('/api/share', (request, response) => {
  shareInformation.find({}, (err, characterArray) => {  // 取得したドキュメントをクライアント側と同じくcharacterArrayと命名
    if (err) response.status(500).send();
    console.log(characterArray);
    response.status(200).send(characterArray);  // characterArrayをレスポンスとして送り返す
  });
});

app.post('/api/signUp', (request, response) => {
  const { idToken } = request.body;
  // console.log(idToken)
  admin.auth().verifyIdToken(idToken)     // アクセストークンを受け取りユニークキーであるuidを受け取る
    .then(function (decodedToken) {
      let uid = decodedToken.uid;
      // console.log(uid);

      connection.query('INSERT INTO user set ?', { uid: `${uid}` }, (error, results, fields) => {
        console.log('loginSuccsee');
      })
      response.status(200).send({ msg: 'success!!' });
    }).catch(function (error) {
      console.log(error);
    });

});

app.post('/api/signIn', (request, response) => {
  const {
    signInName,
    signInPassword,
  } = request.body;

  let query = { "name": signInName, "password": signInPassword };
  userInformation.find(query, (err, user) => {　　　　　　　　　　　　　　　　// まずユーザーがいるか探す
    if (err) return console.log(err);
    // response.status(200).send({ isSignIn: user });

    if (user.length === 0) {
      response.status(200).send({ name: '', password: '', isLogin: false, share: [] }); // いなかった場合falseを返す
    } else {
      shareInformation.find(query, (err, share) => {                     // いたらそのユーザのシェアしている物を探す。なくても空の配列がはいる。
        response.status(200).send({ name: signInName, password: signInPassword, isLogin: true, share: share }); // true 
      });
    }
  });

});

app.post('/users', (req, res) => {
  const { userId } = req.body;

  chatkit
    .createUser({
      id: userId,
      name: userId,
    })
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      if (err.error === 'services/chatkit/user_already_exists') {
        console.log(`User already exists: ${userId}`);
        res.sendStatus(200);
      } else {
        res.status(err.status).json(err);
      }
    });
});

app.post('/authenticate', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id,
  });
  res.status(authData.status).send(authData.body);
});

// MongoDBに接続してからサーバーを立てるために
// app.listen()をmongoose.connect()の中に移動
app.listen(port, err => {
  if (err) throw new Error(err)
  else console.log(`listening on port ${port}`)
});
