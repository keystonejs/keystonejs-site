var showdown = require('showdown');
var converter = new showdown.Converter();

exports.translate = function(load) {
  return converter.makeHtml(load.source);
}

exports.instantiate = function(load) {
  return load.source;
}
