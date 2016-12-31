'use strict';

const Nodal = require('nodal');

class CreatePosts extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016123106565242;
  }

  up() {

    return [
      this.createTable("posts", [])
    ];

  }

  down() {

    return [
      this.dropTable("posts")
    ];

  }

}

module.exports = CreatePosts;
