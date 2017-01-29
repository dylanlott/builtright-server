'use strict';

const Nodal = require('nodal');

class Comment extends Nodal.Model {}

Comment.setDatabase(Nodal.require('db/main.js'));
Comment.setSchema(Nodal.my.Schema.models.Comment);

Comment.joinsTo(Nodal.my.Schema.models.Build, {multiple: true});
Comment.joinsTo(Nodal.my.Schema.models.Post, {multiple: true});
Comment.joinsTo(Nodal.my.Schema.models.Part, {multiple: true});

module.exports = Comment;
