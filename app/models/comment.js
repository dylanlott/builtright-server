'use strict';

const Nodal = require('nodal');

const Build = Nodal.require('app/models/build.js');
const Post = Nodal.require('app/models/post.js');
const Part = Nodal.require('app/models/part.js');

class Comment extends Nodal.Model {}

Comment.setDatabase(Nodal.require('db/main.js'));
Comment.setSchema(Nodal.my.Schema.models.Comment);

Comment.joinsTo(Build, {multiple: true});
// Comment.joinsTo(Post, {multiple: true});
Comment.joinsTo(Part, {multiple: true});

module.exports = Comment;
