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
var _invariant = require('invariant');
var _invariant2 = _interopRequireDefault(_invariant);
var _getRouteParams = require('./getRouteParams');
var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
var _React$PropTypes = _react2['default'].PropTypes;
var array = _React$PropTypes.array;
var func = _React$PropTypes.func;
var object = _React$PropTypes.object;
var RoutingContext = (function(_React$Component) {
  _inherits(RoutingContext, _React$Component);
  function RoutingContext() {
    _classCallCheck(this, RoutingContext);
    _React$Component.apply(this, arguments);
  }
  RoutingContext.prototype.getChildContext = function getChildContext() {
    return {
      history: this.props.history,
      location: this.props.location
    };
  };
  RoutingContext.prototype.createElement = function createElement(component, props) {
    return component == null ? null : this.props.createElement(component, props);
  };
  RoutingContext.prototype.render = function render() {
    var _this = this;
    var _props = this.props;
    var history = _props.history;
    var location = _props.location;
    var routes = _props.routes;
    var params = _props.params;
    var components = _props.components;
    var element = null;
    if (components) {
      element = components.reduceRight(function(element, components, index) {
        if (components == null)
          return element;
        var route = routes[index];
        var routeParams = _getRouteParams2['default'](route, params);
        var props = {
          history: history,
          location: location,
          params: params,
          route: route,
          routeParams: routeParams,
          routes: routes
        };
        if (element)
          props.children = element;
        if (typeof components === 'object') {
          var elements = {};
          for (var key in components) {
            if (components.hasOwnProperty(key))
              elements[key] = _this.createElement(components[key], props);
          }
          return elements;
        }
        return _this.createElement(components, props);
      }, element);
    }
    _invariant2['default'](element === null || element === false || _react2['default'].isValidElement(element), 'The root route must render a single element');
    return element;
  };
  _createClass(RoutingContext, null, [{
    key: 'propTypes',
    value: {
      history: object.isRequired,
      createElement: func.isRequired,
      location: object.isRequired,
      routes: array.isRequired,
      params: object.isRequired,
      components: array.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {createElement: _react2['default'].createElement},
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      history: object.isRequired,
      location: object.isRequired
    },
    enumerable: true
  }]);
  return RoutingContext;
})(_react2['default'].Component);
exports['default'] = RoutingContext;
module.exports = exports['default'];
