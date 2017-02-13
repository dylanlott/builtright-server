'use strict';

const Nodal = require('nodal');
const bcrypt = require('bcryptjs');
const Post = Nodal.require('app/models/post.js');

class User extends Nodal.Model {

  beforeSave(callback) {

    if (!this.hasErrors() && this.hasChanged('password')) {

      bcrypt.hash(this.get('password'), 10, (err, hash) => {

        if (err) {
          return callback(new Error('Could not encrypt password'));
        }

        this.__safeSet__('password', hash);
        callback();

      });

    } else {

      callback();

    }

  }

  verifyPassword(unencrypted, callback) {

    bcrypt.compare(unencrypted, this.get('password'), (err, result) => {
      callback.call(this, err, result);
    });

  }

}

User.setDatabase(Nodal.require('db/main.js'));
User.setSchema(Nodal.my.Schema.models.User);
User.joinsTo(Post, {multiple: true})
module.exports = User;
