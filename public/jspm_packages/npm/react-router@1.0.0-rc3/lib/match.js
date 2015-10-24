/* */ 
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _invariant = require('invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _historyLibCreateMemoryHistory = require('history/lib/createMemoryHistory');
var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);
var _historyLibUseBasename = require('history/lib/useBasename');
var _historyLibUseBasename2 = _interopRequireDefault(_historyLibUseBasename);
var _RouteUtils = require('./RouteUtils');
var _useRoutes = require('./useRoutes');
var _useRoutes2 = _interopRequireDefault(_useRoutes);
var createHistory = _useRoutes2['default'](_historyLibUseBasename2['default'](_historyLibCreateMemoryHistory2['default']));
function match(_ref, callback) {
  var routes = _ref.routes;
  var location = _ref.location;
  var parseQueryString = _ref.parseQueryString;
  var stringifyQuery = _ref.stringifyQuery;
  var basename = _ref.basename;
  _invariant2['default'](location, 'match needs a location');
  var history = createHistory({
    routes: _RouteUtils.createRoutes(routes),
    parseQueryString: parseQueryString,
    stringifyQuery: stringifyQuery,
    basename: basename
  });
  if (typeof location === 'string')
    location = history.createLocation(location);
  history.match(location, function(error, redirectLocation, nextState) {
    callback(error, redirectLocation, nextState && _extends({}, nextState, {history: history}));
  });
}
exports['default'] = match;
module.exports = exports['default'];
