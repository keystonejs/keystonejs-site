/* */ 
'use strict';
var Node = require('./node');
var Literal = module.exports = function Literal(str) {
  this.str = str;
};
Literal.prototype = Object.create(Node.prototype);
Literal.prototype.constructor = Literal;
Literal.prototype.type = 'Literal';
