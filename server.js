import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Character from './character';

const app = express();
const port = 3001;
const dbUrl = 'mongodb://127.0.0.1:27017/kashitaru';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbUrl, dbErr => {
	if (dbErr) throw new Error(dbErr)
	console.log('db connected');

	app.post('/api/characters', (request, response) => {
		const { name, age } = request.body;  // 送られてきた名前と年齢を取得

		let Char = new Character({ name: name, age: age });
		Char.save((err, char) => {
			if (err) return console.error(err);
			response.status(200).send(`${name}(${age}) was successfully created.`);
		});
	});

	app.get('/api/characters', (request, response) => {
		Character.find({}, (err, characterArray) => {  // 取得したドキュメントをクライアント側と同じくcharacterArrayと命名
			if (err) response.status(500).send();
			console.log(characterArray);
			response.status(200).send(characterArray);  // characterArrayをレスポンスとして送り返す
		});
	});


	// MongoDBに接続してからサーバーを立てるために
	// app.listen()をmongoose.connect()の中に移動
	app.listen(port, err => {
		if (err) throw new Error(err)
		else console.log(`listening on port ${port}`)
	})
});
