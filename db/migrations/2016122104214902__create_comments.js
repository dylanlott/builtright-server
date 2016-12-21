'use strict';

const Nodal = require('nodal');

class CreateComments extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016122104214902;
  }

  up() {

    return [
      this.createTable("comments", [{"name":"body","type":"text"},{"name":"hidden","type":"boolean"},{"name":"user","type":"int"},{"name":"status","type":"string"},{"name":"votes","type":"int"},{"name":"flagged","type":"boolean"}])
    ];

  }

  down() {

    return [
      this.dropTable("comments")
    ];

  }

}

module.exports = CreateComments;
