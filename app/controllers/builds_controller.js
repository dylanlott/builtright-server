'use strict';

const Nodal = require('nodal');
const Build = Nodal.require('app/models/build.js');

class BuildsController extends Nodal.Controller {

  index() {

    Build.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Build.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Build.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Build.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Build.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = BuildsController;
