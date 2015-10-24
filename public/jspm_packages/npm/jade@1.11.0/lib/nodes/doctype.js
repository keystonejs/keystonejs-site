/* */ 
'use strict';
var Node = require('./node');
var Doctype = module.exports = function Doctype(val) {
  this.val = val;
};
Doctype.prototype = Object.create(Node.prototype);
Doctype.prototype.constructor = Doctype;
Doctype.prototype.type = 'Doctype';
