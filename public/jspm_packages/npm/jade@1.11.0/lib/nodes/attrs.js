/* */ 
'use strict';
var Node = require('./node');
var Attrs = module.exports = function Attrs() {
  this.attributeNames = [];
  this.attrs = [];
  this.attributeBlocks = [];
};
Attrs.prototype = Object.create(Node.prototype);
Attrs.prototype.constructor = Attrs;
Attrs.prototype.type = 'Attrs';
Attrs.prototype.setAttribute = function(name, val, escaped) {
  if (name !== 'class' && this.attributeNames.indexOf(name) !== -1) {
    throw new Error('Duplicate attribute "' + name + '" is not allowed.');
  }
  this.attributeNames.push(name);
  this.attrs.push({
    name: name,
    val: val,
    escaped: escaped
  });
  return this;
};
Attrs.prototype.removeAttribute = function(name) {
  var err = new Error('attrs.removeAttribute is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  for (var i = 0,
      len = this.attrs.length; i < len; ++i) {
    if (this.attrs[i] && this.attrs[i].name == name) {
      delete this.attrs[i];
    }
  }
};
Attrs.prototype.getAttribute = function(name) {
  var err = new Error('attrs.getAttribute is deprecated and will be removed in v2.0.0');
  console.warn(err.stack);
  for (var i = 0,
      len = this.attrs.length; i < len; ++i) {
    if (this.attrs[i] && this.attrs[i].name == name) {
      return this.attrs[i].val;
    }
  }
};
Attrs.prototype.addAttributes = function(src) {
  this.attributeBlocks.push(src);
};
