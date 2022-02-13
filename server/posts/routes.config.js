const PostsController = require('./controllers/posts.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
const config = require('../common/config/env.config');

const ADMIN = config.permissionLevels.ADMIN;

exports.routesConfig = function (app) {
	app.post('/api/posts', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		PostsController.insert,
	]);

	app.get('/api/posts/:postId', [
		PostsController.getById,
	]);
	app.get('/api/posts', [
		PostsController.list,
	]);

	app.patch('/api/posts/:postId', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		PostsController.patchById,
	]);

	app.delete('/api/posts/:postId', [
		ValidationMiddleware.validJWTNeeded,
		PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
		PostsController.removeById,
	]);
};
