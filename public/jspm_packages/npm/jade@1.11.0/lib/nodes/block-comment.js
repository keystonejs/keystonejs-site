/* */ 
'use strict';
var Node = require('./node');
var BlockComment = module.exports = function BlockComment(val, block, buffer) {
  this.block = block;
  this.val = val;
  this.buffer = buffer;
};
BlockComment.prototype = Object.create(Node.prototype);
BlockComment.prototype.constructor = BlockComment;
BlockComment.prototype.type = 'BlockComment';
