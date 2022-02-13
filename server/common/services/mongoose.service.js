const mongoogse = require('mongoose');
const config = require('../config/env.config');
let count = 0;

const options={
	autoIndex: false,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	family: 4,
	tlsInsecure: true
};

const connectWithRetry = () => {
	console.log('MongoDB connection with retry');
	mongoogse.connect(config.mongoConnect, options).then( () => {
		console.log('MongoDB is connected');
	}).catch( err => {
		console.log(err);
		console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
		setTimeout(connectWithRetry, 5000);
	})
};

connectWithRetry();

exports.mongoose = mongoogse;