'use strict';

const Nodal = require('nodal');
const User = Nodal.require('app/models/user.js');
const Comment = Nodal.require('app/models/comment.js');

class Post extends Nodal.Model {}

Post.joinsTo(User, {multiple: true});
Post.joinsTo(Comment, {multiple: true});

Post.setDatabase(Nodal.require('db/main.js'));
Post.setSchema(Nodal.my.Schema.models.Post);

module.exports = Post;
