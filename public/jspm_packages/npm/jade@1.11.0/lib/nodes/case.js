/* */ 
'use strict';
var Node = require('./node');
var Case = exports = module.exports = function Case(expr, block) {
  this.expr = expr;
  this.block = block;
};
Case.prototype = Object.create(Node.prototype);
Case.prototype.constructor = Case;
Case.prototype.type = 'Case';
var When = exports.When = function When(expr, block) {
  this.expr = expr;
  this.block = block;
  this.debug = false;
};
When.prototype = Object.create(Node.prototype);
When.prototype.constructor = When;
When.prototype.type = 'When';
