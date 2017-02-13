'use strict';

const Nodal = require('nodal');
const User = Nodal.require('app/models/user.js');

class UsersController extends Nodal.Controller {

  index() {

    User.query()
      .join('builds')
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models, ['id', 'username', 'email', 'created_at']);

      });

  }

  show() {

    User.find(this.params.route.id, (err, model) => {

      this.respond(err || model, ['id', 'username', 'email', 'created_at']);

    });

  }

  create() {

    User.create(this.params.body, (err, model) => {

      console.log('USER CREATE: ', this.params.body)

      this.respond(err || model, ['id', 'username', 'email', 'created_at']);

    });

  }

  update() {

    User.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model, ['id', 'username', 'email', 'created_at']);

    });

  }

  destroy() {

    User.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model, ['id', 'username', 'email', 'created_at']);

    });

  }

}

module.exports = UsersController;
