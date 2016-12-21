'use strict';

const Nodal = require('nodal');

class Part extends Nodal.Model {}

Part.setDatabase(Nodal.require('db/main.js'));
Part.setSchema(Nodal.my.Schema.models.Part);

module.exports = Part;
