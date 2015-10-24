/* */ 
'use strict';
var Node = require('./node');
var Text = module.exports = function Text(line) {
  this.val = line;
};
Text.prototype = Object.create(Node.prototype);
Text.prototype.constructor = Text;
Text.prototype.type = 'Text';
Text.prototype.isText = true;
