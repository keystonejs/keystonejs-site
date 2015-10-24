/* */ 
'use strict';
var Node = require('./node');
var Filter = module.exports = function Filter(name, block, attrs) {
  this.name = name;
  this.block = block;
  this.attrs = attrs;
};
Filter.prototype = Object.create(Node.prototype);
Filter.prototype.constructor = Filter;
Filter.prototype.type = 'Filter';
