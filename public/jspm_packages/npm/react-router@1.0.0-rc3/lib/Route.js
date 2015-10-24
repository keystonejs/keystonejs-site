/* */ 
'use strict';
exports.__esModule = true;
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }});
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _warning = require('warning');
var _warning2 = _interopRequireDefault(_warning);
var _invariant = require('invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _RouteUtils = require('./RouteUtils');
var _PropTypes = require('./PropTypes');
var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var bool = _React$PropTypes.bool;
var func = _React$PropTypes.func;
var Route = (function(_React$Component) {
  _inherits(Route, _React$Component);
  function Route() {
    _classCallCheck(this, Route);
    _React$Component.apply(this, arguments);
  }
  Route.createRouteFromReactElement = function createRouteFromReactElement(element) {
    var route = _RouteUtils.createRouteFromReactElement(element);
    if (route.handler) {
      _warning2['default'](false, '<Route handler> is deprecated, use <Route component> instead');
      route.component = route.handler;
      delete route.handler;
    }
    return route;
  };
  Route.prototype.render = function render() {
    _invariant2['default'](false, '<Route> elements are for router configuration only and should not be rendered');
  };
  _createClass(Route, null, [{
    key: 'propTypes',
    value: {
      path: string,
      ignoreScrollBehavior: bool,
      handler: _PropTypes.component,
      component: _PropTypes.component,
      components: _PropTypes.components,
      getComponents: func
    },
    enumerable: true
  }]);
  return Route;
})(_react2['default'].Component);
exports['default'] = Route;
module.exports = exports['default'];
