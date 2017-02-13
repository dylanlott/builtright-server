'use strict';

const Nodal = require('nodal');

const User = Nodal.require('app/models/user.js');
const Part = Nodal.require('app/models/part.js');
const Comment = Nodal.require('app/models/comment.js');

class Build extends Nodal.Model {}

Build.setDatabase(Nodal.require('db/main.js'));
Build.setSchema(Nodal.my.Schema.models.Build);

Build.joinsTo(User, {multiple: true});
Build.joinsTo(Comment, {multiple: true});
module.exports = Build;
