/* */ 
'use strict';
var Node = require('./node');
var MixinBlock = module.exports = function MixinBlock() {};
MixinBlock.prototype = Object.create(Node.prototype);
MixinBlock.prototype.constructor = MixinBlock;
MixinBlock.prototype.type = 'MixinBlock';
