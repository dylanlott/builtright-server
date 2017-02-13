'use strict';

const Nodal = require('nodal');

const Build = Nodal.require('app/models/build.js');
const User = Nodal.require('app/models/user.js');

class Part extends Nodal.Model {}

Part.setDatabase(Nodal.require('db/main.js'));
Part.setSchema(Nodal.my.Schema.models.Part);

Part.joinsTo(Build, {multiple: true});
Part.joinsTo(User, {multiple: true});

module.exports = Part;
