const config = require('./common/config/env.config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const AuthorizationRoute = require('./authorization/routes.config');
const UsersRouter = require('./users/routes.config');
const PostsRouter = require('./posts/routes.config');

app.use(express.static(path.join(__dirname, '../build')));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());

app.get('/', (req,res) => {
	// Get the index.html in build folder
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

AuthorizationRoute.routesConfig(app);
UsersRouter.routesConfig(app);
PostsRouter.routesConfig(app);

app.listen( config.port, () => {
	console.log(`Server is up and running on port ${config.port}`);
})