/* */ 
'use strict';
exports.__esModule = true;
var _PatternUtils = require('./PatternUtils');
function deepEqual(a, b) {
  if (a == b)
    return true;
  if (a == null || b == null)
    return false;
  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function(item, index) {
      return deepEqual(item, b[index]);
    });
  }
  if (typeof a === 'object') {
    for (var p in a) {
      if (a.hasOwnProperty(p) && (!b.hasOwnProperty(p) || !deepEqual(a[p], b[p])))
        return false;
    }
    return true;
  }
  return String(a) === String(b);
}
function paramsAreActive(paramNames, paramValues, activeParams) {
  return paramNames.every(function(paramName, index) {
    return String(paramValues[index]) === String(activeParams[paramName]);
  });
}
function getMatchingRoute(pathname, activeRoutes, activeParams) {
  var route = undefined,
      pattern = undefined,
      basename = '';
  for (var i = 0,
      len = activeRoutes.length; i < len; ++i) {
    route = activeRoutes[i];
    pattern = route.path || '';
    if (pattern.charAt(0) !== '/')
      pattern = basename.replace(/\/*$/, '/') + pattern;
    var _matchPattern = _PatternUtils.matchPattern(pattern, pathname);
    var remainingPathname = _matchPattern.remainingPathname;
    var paramNames = _matchPattern.paramNames;
    var paramValues = _matchPattern.paramValues;
    if (remainingPathname === '' && paramsAreActive(paramNames, paramValues, activeParams))
      return route;
    basename = pattern;
  }
  return null;
}
function routeIsActive(pathname, activeRoutes, activeParams, indexOnly) {
  var route = getMatchingRoute(pathname, activeRoutes, activeParams);
  if (route == null)
    return false;
  if (indexOnly)
    return activeRoutes.length > 1 && activeRoutes[activeRoutes.length - 1] === route.indexRoute;
  return true;
}
function queryIsActive(query, activeQuery) {
  if (activeQuery == null)
    return query == null;
  if (query == null)
    return true;
  return deepEqual(query, activeQuery);
}
function isActive(pathname, query, indexOnly, location, routes, params) {
  if (location == null)
    return false;
  if (!routeIsActive(pathname, routes, params, indexOnly))
    return false;
  return queryIsActive(query, location.query);
}
exports['default'] = isActive;
module.exports = exports['default'];
