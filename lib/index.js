'use strict';

exports.__esModule = true;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action_types = require('./action_types');

var _action_types2 = _interopRequireDefault(_action_types);

var _middlewareAccessToken = require('./middleware/accessToken');

var _middlewareAccessToken2 = _interopRequireDefault(_middlewareAccessToken);

_defaults(exports, _interopExportWildcard(_actions, _defaults));

exports.actions = _actions2['default'];
exports.reducer = _reducer2['default'];
exports.types = _action_types2['default'];
exports.accessTokenMiddleware = _middlewareAccessToken2['default'];
exports.createAccessTokenMiddleware = _middlewareAccessToken.createAccessTokenMiddleware;
exports['default'] = {
  actions: _actions2['default'],
  reducer: _reducer2['default'],
  types: _action_types2['default'],
  accessTokenMiddleware: _middlewareAccessToken2['default'],
  createAccessTokenMiddleware: _middlewareAccessToken.createAccessTokenMiddleware
};