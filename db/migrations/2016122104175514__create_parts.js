'use strict';

const Nodal = require('nodal');

class CreateParts extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016122104175514;
  }

  up() {

    return [
      this.createTable("parts", [{"name":"name","type":"string"},{"name":"description","type":"text"},{"name":"id","type":"string"},{"name":"price","type":"float"},{"name":"url","type":"string"},{"name":"brand","type":"string"},{"name":"model","type":"string"},{"name":"option","type":"string"},{"name":"user","type":"int"},{"name":"rating","type":"float"}])
    ];

  }

  down() {

    return [
      this.dropTable("parts")
    ];

  }

}

module.exports = CreateParts;
