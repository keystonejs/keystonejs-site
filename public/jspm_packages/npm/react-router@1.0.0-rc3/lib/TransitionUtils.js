/* */ 
'use strict';
exports.__esModule = true;
exports.runEnterHooks = runEnterHooks;
exports.runLeaveHooks = runLeaveHooks;
var _AsyncUtils = require('./AsyncUtils');
function createEnterHook(hook, route) {
  return function(a, b, callback) {
    hook.apply(route, arguments);
    if (hook.length < 3) {
      callback();
    }
  };
}
function getEnterHooks(routes) {
  return routes.reduce(function(hooks, route) {
    if (route.onEnter)
      hooks.push(createEnterHook(route.onEnter, route));
    return hooks;
  }, []);
}
function runEnterHooks(routes, nextState, callback) {
  var hooks = getEnterHooks(routes);
  if (!hooks.length) {
    callback();
    return;
  }
  var redirectInfo = undefined;
  function replaceState(state, pathname, query) {
    redirectInfo = {
      pathname: pathname,
      query: query,
      state: state
    };
  }
  _AsyncUtils.loopAsync(hooks.length, function(index, next, done) {
    hooks[index](nextState, replaceState, function(error) {
      if (error || redirectInfo) {
        done(error, redirectInfo);
      } else {
        next();
      }
    });
  }, callback);
}
function runLeaveHooks(routes) {
  for (var i = 0,
      len = routes.length; i < len; ++i) {
    if (routes[i].onLeave)
      routes[i].onLeave.call(routes[i]);
  }
}
