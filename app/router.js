'use strict';

const Nodal = require('nodal');
const router = new Nodal.Router();

/* Middleware */
/* executed *before* Controller-specific middleware */

const CORSMiddleware = Nodal.require('middleware/cors_middleware.js');
// const CORSAuthorizationMiddleware = Nodal.require('middleware/cors_authorization_middleware.js');
// const ForceWWWMiddleware = Nodal.require('middleware/force_www_middleware.js');
// const ForceHTTPSMiddleware = Nodal.require('middleware/force_https_middleware.js');

router.middleware.use(CORSMiddleware);
// router.middleware.use(CORSAuthorizationMiddleware);
// router.middleware.use(ForceWWWMiddleware);
// router.middleware.use(ForceHTTPSMiddleware);

/* Renderware */
/* executed *after* Controller-specific renderware */

const GzipRenderware = Nodal.require('renderware/gzip_renderware.js')

router.renderware.use(GzipRenderware);

/* Routes */

const IndexController = Nodal.require('app/controllers/index_controller.js');

/* generator: begin imports */

const PartsController = Nodal.require('app/controllers/parts_controller.js');
const BuildsController = Nodal.require('app/controllers/builds_controller.js');
const CommentsController = Nodal.require('app/controllers/comments_controller.js');
const AccessTokensController = Nodal.require('app/controllers/access_tokens_controller.js');
const UsersController = Nodal.require('app/controllers/users_controller.js');
const PostsController = Nodal.require('app/controllers/posts_controller.js');

/* generator: end imports */

router.route('/').use(IndexController);

/* generator: begin routes */

router.route('/parts/{id}').use(PartsController);
router.route('/builds/{id}').use(BuildsController);
router.route('/comments/{id}').use(CommentsController);
router.route('/access_tokens/{id}').use(AccessTokensController);
router.route('/users/{id}').use(UsersController);
router.route('/posts/{id}').use(PostsController);

/* generator: end routes */

module.exports = router;
