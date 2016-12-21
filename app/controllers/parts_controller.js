'use strict';

const Nodal = require('nodal');
const Part = Nodal.require('app/models/part.js');

class PartsController extends Nodal.Controller {

  index() {

    Part.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Part.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Part.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Part.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Part.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = PartsController;
