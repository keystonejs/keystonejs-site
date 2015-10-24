/* */ 
'use strict';
var Node = require('./node');
var Comment = module.exports = function Comment(val, buffer) {
  this.val = val;
  this.buffer = buffer;
};
Comment.prototype = Object.create(Node.prototype);
Comment.prototype.constructor = Comment;
Comment.prototype.type = 'Comment';
