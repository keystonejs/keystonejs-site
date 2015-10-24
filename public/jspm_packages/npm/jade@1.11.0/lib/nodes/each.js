/* */ 
'use strict';
var Node = require('./node');
var Each = module.exports = function Each(obj, val, key, block) {
  this.obj = obj;
  this.val = val;
  this.key = key;
  this.block = block;
};
Each.prototype = Object.create(Node.prototype);
Each.prototype.constructor = Each;
Each.prototype.type = 'Each';
