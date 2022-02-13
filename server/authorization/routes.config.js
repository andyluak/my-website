const VerifyUserMiddleware = require('./middleware/verify.user.middleware');
const AuthorizationController = require('./controllers/authorization.controller');

exports.routesConfig = (app) => {
	app.post('/auth', [
		VerifyUserMiddleware.hasAuthValidFields,
		VerifyUserMiddleware.isPasswordAndUserMatch,
		AuthorizationController.login,
	]);
};
