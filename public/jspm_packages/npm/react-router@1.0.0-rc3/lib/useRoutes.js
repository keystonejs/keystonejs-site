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
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var _warning = require('warning');
var _warning2 = _interopRequireDefault(_warning);
var _historyLibActions = require('history/lib/Actions');
var _historyLibUseQueries = require('history/lib/useQueries');
var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);
var _computeChangedRoutes2 = require('./computeChangedRoutes');
var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
var _TransitionUtils = require('./TransitionUtils');
var _isActive2 = require('./isActive');
var _isActive3 = _interopRequireDefault(_isActive2);
var _getComponents = require('./getComponents');
var _getComponents2 = _interopRequireDefault(_getComponents);
var _matchRoutes = require('./matchRoutes');
var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
function hasAnyProperties(object) {
  for (var p in object) {
    if (object.hasOwnProperty(p))
      return true;
  }
  return false;
}
function useRoutes(createHistory) {
  return function() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var routes = options.routes;
    var historyOptions = _objectWithoutProperties(options, ['routes']);
    var history = _historyLibUseQueries2['default'](createHistory)(historyOptions);
    var state = {};
    function isActive(pathname, query) {
      var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
      return _isActive3['default'](pathname, query, indexOnly, state.location, state.routes, state.params);
    }
    function createLocationFromRedirectInfo(_ref) {
      var pathname = _ref.pathname;
      var query = _ref.query;
      var state = _ref.state;
      return history.createLocation(history.createPath(pathname, query), state, _historyLibActions.REPLACE);
    }
    var partialNextState = undefined;
    function match(location, callback) {
      if (partialNextState && partialNextState.location === location) {
        finishMatch(partialNextState, callback);
      } else {
        _matchRoutes2['default'](routes, location, function(error, nextState) {
          if (error) {
            callback(error);
          } else if (nextState) {
            finishMatch(_extends({}, nextState, {location: location}), callback);
          } else {
            callback();
          }
        });
      }
    }
    function finishMatch(nextState, callback) {
      var _computeChangedRoutes = _computeChangedRoutes3['default'](state, nextState);
      var leaveRoutes = _computeChangedRoutes.leaveRoutes;
      var enterRoutes = _computeChangedRoutes.enterRoutes;
      _TransitionUtils.runLeaveHooks(leaveRoutes);
      _TransitionUtils.runEnterHooks(enterRoutes, nextState, function(error, redirectInfo) {
        if (error) {
          callback(error);
        } else if (redirectInfo) {
          callback(null, createLocationFromRedirectInfo(redirectInfo));
        } else {
          _getComponents2['default'](nextState, function(error, components) {
            if (error) {
              callback(error);
            } else {
              callback(null, null, state = _extends({}, nextState, {components: components}));
            }
          });
        }
      });
    }
    var RouteGuid = 1;
    function getRouteID(route) {
      return route.__id__ || (route.__id__ = RouteGuid++);
    }
    var RouteHooks = {};
    function getRouteHooksForRoutes(routes) {
      return routes.reduce(function(hooks, route) {
        hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
        return hooks;
      }, []);
    }
    function transitionHook(location, callback) {
      _matchRoutes2['default'](routes, location, function(error, nextState) {
        if (nextState == null) {
          callback();
          return;
        }
        partialNextState = _extends({}, nextState, {location: location});
        var hooks = getRouteHooksForRoutes(_computeChangedRoutes3['default'](state, nextState).leaveRoutes);
        var result = undefined;
        for (var i = 0,
            len = hooks.length; result == null && i < len; ++i) {
          result = hooks[i](location);
        }
        callback(result);
      });
    }
    function beforeUnloadHook() {
      if (state.routes) {
        var hooks = getRouteHooksForRoutes(state.routes);
        var message = undefined;
        for (var i = 0,
            len = hooks.length; typeof message !== 'string' && i < len; ++i) {
          message = hooks[i]();
        }
        return message;
      }
    }
    var unlistenBefore = undefined,
        unlistenBeforeUnload = undefined;
    function listenBeforeLeavingRoute(route, hook) {
      var routeID = getRouteID(route);
      var hooks = RouteHooks[routeID];
      if (hooks == null) {
        var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
        hooks = RouteHooks[routeID] = [hook];
        if (thereWereNoRouteHooks) {
          unlistenBefore = history.listenBefore(transitionHook);
          if (history.listenBeforeUnload)
            unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
        }
      } else if (hooks.indexOf(hook) === -1) {
        hooks.push(hook);
      }
      return function() {
        var hooks = RouteHooks[routeID];
        if (hooks != null) {
          var newHooks = hooks.filter(function(item) {
            return item !== hook;
          });
          if (newHooks.length === 0) {
            delete RouteHooks[routeID];
            if (!hasAnyProperties(RouteHooks)) {
              if (unlistenBefore) {
                unlistenBefore();
                unlistenBefore = null;
              }
              if (unlistenBeforeUnload) {
                unlistenBeforeUnload();
                unlistenBeforeUnload = null;
              }
            }
          } else {
            RouteHooks[routeID] = newHooks;
          }
        }
      };
    }
    function listen(listener) {
      return history.listen(function(location) {
        if (state.location === location) {
          listener(null, state);
        } else {
          match(location, function(error, redirectLocation, nextState) {
            if (error) {
              listener(error);
            } else if (redirectLocation) {
              history.transitionTo(redirectLocation);
            } else if (nextState) {
              listener(null, nextState);
            } else {
              _warning2['default'](false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash);
            }
          });
        }
      });
    }
    return _extends({}, history, {
      isActive: isActive,
      match: match,
      listenBeforeLeavingRoute: listenBeforeLeavingRoute,
      listen: listen
    });
  };
}
exports['default'] = useRoutes;
module.exports = exports['default'];
