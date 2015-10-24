/* */ 
'use strict';
var Node = require('./node');
var Code = module.exports = function Code(val, buffer, escape) {
  this.val = val;
  this.buffer = buffer;
  this.escape = escape;
  if (val.match(/^ *else/))
    this.debug = false;
};
Code.prototype = Object.create(Node.prototype);
Code.prototype.constructor = Code;
Code.prototype.type = 'Code';
