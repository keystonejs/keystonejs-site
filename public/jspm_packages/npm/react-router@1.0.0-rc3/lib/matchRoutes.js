/* */ 
'use strict';
exports.__esModule = true;
var _AsyncUtils = require('./AsyncUtils');
var _PatternUtils = require('./PatternUtils');
var _RouteUtils = require('./RouteUtils');
function getChildRoutes(route, location, callback) {
  if (route.childRoutes) {
    callback(null, route.childRoutes);
  } else if (route.getChildRoutes) {
    route.getChildRoutes(location, function(error, childRoutes) {
      callback(error, !error && _RouteUtils.createRoutes(childRoutes));
    });
  } else {
    callback();
  }
}
function getIndexRoute(route, location, callback) {
  if (route.indexRoute) {
    callback(null, route.indexRoute);
  } else if (route.getIndexRoute) {
    route.getIndexRoute(location, function(error, indexRoute) {
      callback(error, !error && _RouteUtils.createRoutes(indexRoute)[0]);
    });
  } else {
    callback();
  }
}
function assignParams(params, paramNames, paramValues) {
  return paramNames.reduceRight(function(params, paramName, index) {
    var paramValue = paramValues && paramValues[index];
    if (Array.isArray(params[paramName])) {
      params[paramName].unshift(paramValue);
    } else if (paramName in params) {
      params[paramName] = [paramValue, params[paramName]];
    } else {
      params[paramName] = paramValue;
    }
    return params;
  }, params);
}
function createParams(paramNames, paramValues) {
  return assignParams({}, paramNames, paramValues);
}
function matchRouteDeep(basename, route, location, callback) {
  var pattern = route.path || '';
  if (pattern.charAt(0) !== '/')
    pattern = basename.replace(/\/*$/, '/') + pattern;
  var _matchPattern = _PatternUtils.matchPattern(pattern, location.pathname);
  var remainingPathname = _matchPattern.remainingPathname;
  var paramNames = _matchPattern.paramNames;
  var paramValues = _matchPattern.paramValues;
  var isExactMatch = remainingPathname === '';
  if (isExactMatch && route.path) {
    (function() {
      var match = {
        routes: [route],
        params: createParams(paramNames, paramValues)
      };
      getIndexRoute(route, location, function(error, indexRoute) {
        if (error) {
          callback(error);
        } else {
          if (indexRoute)
            match.routes.push(indexRoute);
          callback(null, match);
        }
      });
    })();
  } else if (remainingPathname != null || route.childRoutes) {
    getChildRoutes(route, location, function(error, childRoutes) {
      if (error) {
        callback(error);
      } else if (childRoutes) {
        matchRoutes(childRoutes, location, function(error, match) {
          if (error) {
            callback(error);
          } else if (match) {
            match.routes.unshift(route);
            callback(null, match);
          } else {
            callback();
          }
        }, pattern);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}
function matchRoutes(routes, location, callback) {
  var basename = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];
  _AsyncUtils.loopAsync(routes.length, function(index, next, done) {
    matchRouteDeep(basename, routes[index], location, function(error, match) {
      if (error || match) {
        done(error, match);
      } else {
        next();
      }
    });
  }, callback);
}
exports['default'] = matchRoutes;
module.exports = exports['default'];
