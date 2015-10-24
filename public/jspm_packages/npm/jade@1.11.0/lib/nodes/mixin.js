/* */ 
'use strict';
var Attrs = require('./attrs');
var Mixin = module.exports = function Mixin(name, args, block, call) {
  Attrs.call(this);
  this.name = name;
  this.args = args;
  this.block = block;
  this.call = call;
};
Mixin.prototype = Object.create(Attrs.prototype);
Mixin.prototype.constructor = Mixin;
Mixin.prototype.type = 'Mixin';
