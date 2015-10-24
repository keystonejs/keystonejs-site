/* */ 
'use strict';
var Attrs = require('./attrs');
var Block = require('./block');
var inlineTags = require('../inline-tags');
var Tag = module.exports = function Tag(name, block) {
  Attrs.call(this);
  this.name = name;
  this.block = block || new Block;
};
Tag.prototype = Object.create(Attrs.prototype);
Tag.prototype.constructor = Tag;
Tag.prototype.type = 'Tag';
Tag.prototype.clone = function() {
  var err = new Error('tag.clone is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  var clone = new Tag(this.name, this.block.clone());
  clone.line = this.line;
  clone.attrs = this.attrs;
  clone.textOnly = this.textOnly;
  return clone;
};
Tag.prototype.isInline = function() {
  return ~inlineTags.indexOf(this.name);
};
Tag.prototype.canInline = function() {
  var nodes = this.block.nodes;
  function isInline(node) {
    if (node.isBlock)
      return node.nodes.every(isInline);
    return node.isText || (node.isInline && node.isInline());
  }
  if (!nodes.length)
    return true;
  if (1 == nodes.length)
    return isInline(nodes[0]);
  if (this.block.nodes.every(isInline)) {
    for (var i = 1,
        len = nodes.length; i < len; ++i) {
      if (nodes[i - 1].isText && nodes[i].isText)
        return false;
    }
    return true;
  }
  return false;
};
