import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import shareInformation from './shareInformation';

const app = express();
const port = 3001;
const dbUrl = 'mongodb://127.0.0.1:27017/kashitaru';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dbUrl, dbErr => {
	if (dbErr) throw new Error(dbErr)
	console.log('db connected');

	app.post('/api/share', (request, response) => {
		const {
			productName,
			companyName,
			name,
			mailAddress,
			companyAddress,
			comment
		} = request.body;  // 送られてきた名前と年齢を取得

		let Share = new shareInformation({
			productName: productName,
			companyName: companyName,
			Name: name,
			mailAddress: mailAddress,
			companyAddress: companyAddress,
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


	// MongoDBに接続してからサーバーを立てるために
	// app.listen()をmongoose.connect()の中に移動
	app.listen(port, err => {
		if (err) throw new Error(err)
		else console.log(`listening on port ${port}`)
	})
});
