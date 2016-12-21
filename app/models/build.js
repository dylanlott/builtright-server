'use strict';

const Nodal = require('nodal');

class Build extends Nodal.Model {}

Build.setDatabase(Nodal.require('db/main.js'));
Build.setSchema(Nodal.my.Schema.models.Build);

Build.joinsTo(Nodal.my.Schema.models.User, {multiple: true});

module.exports = Build;
