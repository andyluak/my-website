const UsersController = require('./controllers/users.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const config = require('../common/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;

exports.routesConfig = function (app) {
	app.post('/users', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		UsersController.insert,
	]);

	app.get('/users/:userId', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		UsersController.getById,
	]);
	app.get('/users', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		UsersController.list,
	]);

	app.patch('/users/:userId', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		UsersController.patchById,
	]);

	app.delete('/users/:userId', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		UsersController.removeById,
	]);
};
