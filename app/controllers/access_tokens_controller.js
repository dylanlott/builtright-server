'use strict';

const Nodal = require('nodal');
const AccessToken = Nodal.require('app/models/access_token.js');

class AccessTokensController extends Nodal.Controller {

  create() {

    AccessToken.login(this.params, (err, accessToken) => {

      this.respond(err || accessToken);

    });

  }

  destroy() {

    AccessToken.logout(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = AccessTokensController;
