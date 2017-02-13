'use strict';

const Nodal = require('nodal');

class CreatePosts extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016123106565242;
  }

  up() {

    return [
      this.createTable("posts", [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "body",
          "type": "text"
        },
        {
          "name": "published",
          "type": "boolean"
        },
        {
          "name": "featured_image",
          "type": "string"
        },
        {
          "name": "user_id",
          "type": "int"
        },
        {
          "name": "votes",
          "type": "int"
        }, {
          "name": "admin_blog",
          "type": "boolean"
        }
      ])
    ];

  }

  down() {

    return [
      this.dropTable("posts")
    ];

  }

}

module.exports = CreatePosts;
