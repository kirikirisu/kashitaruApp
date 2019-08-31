import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Chatkit from '@pusher/chatkit-server';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import shareInformation from './shareInformation';
import userInformation from './userInformation';

const app = express();
const port = process.env.PORT;
const dbUrl = 'mongodb://127.0.0.1:27017/kashitaru';

const chatkit = new Chatkit({
	instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
	key: process.env.CHATKIT_SECRET_KEY,
});


app.use(cors());
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

	app.post('/api/signUp', (request, response) => {
		const {
			name,
			mailAddress,
		} = request.body;

		let User = new userInformation({
			name: name,
			mailAddress: mailAddress,
		});

		User.save((err, user) => {
			if (err) return console.error(err);
			response.status(200).send(`successfully!!`);
		});
	});

	app.post('/api/signIn', (request, response) => {
		const {
			signInName,
			signInMailAddress,
		} = request.body;

		let query = { "name": signInName, "mailAddress": signInMailAddress };
		userInformation.find(query, (err, user) => {
			if (err) return console.log(err);
			// response.status(200).send({ isSignIn: user });

			if (user.length === 0) {
				response.status(200).send({ name: '', mailAddress: '' }); // false
			} else {
				response.status(200).send({ name: signInName, mailAddress: signInMailAddress }); // true
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
	})
});
