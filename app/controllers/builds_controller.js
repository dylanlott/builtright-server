'use strict';

const Nodal = require('nodal');
const Build = Nodal.require('app/models/build.js');
const AuthController = Nodal.require('app/controllers/auth_controller.js');

class BuildsController extends AuthController {

  index() {

      Build.query()
        .join('parts')
        .join('user')
        .join('comment')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models, [
            'id',
            'name',
            'description',
            'user_id',
            'make',
            'model',
            'year',
            'trim',
            'rating',
            'engine',
            'misc',
            'created_at',
            'updated_at',
            {user: [
              'id',
              'username',
              'email'
            ]},
            {parts: [
              'name',
              'description',
              'id',
              'price',
              'url',
              'brand',
              'model',
              'option',
              'user_id',
              'rating',
              'created_at'
            ]},
            {comment: [
              'body',
              'user_id',
              'status',
              'build_id',
              'post_id',
              'part_id',
              'flagged'
            ]}
          ]);

        });
  }

  show() {

    Build.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    this.authorize((err, token, user) => {

      if (err) return this.respond(err);

      Build.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    })

  }

  update() {

    this.authorize((err, accessToken, user) => {

      console.log('update user: ', user);

      if (err) return this.respond(err);

      Build.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    });

  }

  destroy() {

    this.authorize((err, accessToken, user) => {

      if (err) return this.respond(err);

      Build.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    })

  }

}

module.exports = BuildsController;
