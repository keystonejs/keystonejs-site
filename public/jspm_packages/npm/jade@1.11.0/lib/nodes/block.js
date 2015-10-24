/* */ 
'use strict';
var Node = require('./node');
var Block = module.exports = function Block(node) {
  this.nodes = [];
  if (node)
    this.push(node);
};
Block.prototype = Object.create(Node.prototype);
Block.prototype.constructor = Block;
Block.prototype.type = 'Block';
Block.prototype.isBlock = true;
Block.prototype.replace = function(other) {
  var err = new Error('block.replace is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  other.nodes = this.nodes;
};
Block.prototype.push = function(node) {
  return this.nodes.push(node);
};
Block.prototype.isEmpty = function() {
  return 0 == this.nodes.length;
};
Block.prototype.unshift = function(node) {
  return this.nodes.unshift(node);
};
Block.prototype.includeBlock = function() {
  var ret = this,
      node;
  for (var i = 0,
      len = this.nodes.length; i < len; ++i) {
    node = this.nodes[i];
    if (node.yield)
      return node;
    else if (node.textOnly)
      continue;
    else if (node.includeBlock)
      ret = node.includeBlock();
    else if (node.block && !node.block.isEmpty())
      ret = node.block.includeBlock();
    if (ret.yield)
      return ret;
  }
  return ret;
};
Block.prototype.clone = function() {
  var err = new Error('block.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  var clone = new Block;
  for (var i = 0,
      len = this.nodes.length; i < len; ++i) {
    clone.push(this.nodes[i].clone());
  }
  return clone;
};
