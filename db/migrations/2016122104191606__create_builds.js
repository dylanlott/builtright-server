'use strict';

const Nodal = require('nodal');

class CreateBuilds extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016122104191606;
  }

  up() {

    return [
      this.createTable("builds", [{"name":"name","type":"string"},{"name":"description","type":"text"},{"name":"user","type":"int"},{"name":"make","type":"string"},{"name":"model","type":"string"},{"name":"year","type":"int"},{"name":"trim","type":"string"},{"name":"rating","type":"float"},{"name":"engine","type":"string"},{"name":"misc","type":"json"}])
    ];

  }

  down() {

    return [
      this.dropTable("builds")
    ];

  }

}

module.exports = CreateBuilds;
