'use strict';

const Nodal = require('nodal');
const Post = Nodal.require('app/models/post.js');
const AuthController = Nodal.require('app/controllers/auth_controller.js');

class PostsController extends AuthController {

  index() {

    Post.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Post.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    this.authorize((err, accessToken, user) => {

      if (err) return this.respond(err);

      Post.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    })


  }

  update() {

    this.authorize((err, accessToken, user) => {

      if (err) return this.respond(err);

      Post.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    })

  }

  destroy() {

    this.authorize((err, accessToken, user) => {

      if (err) return this.respond(err);

      Post.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    })

  }

}

module.exports = PostsController;
