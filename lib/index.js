'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

exports['default'] = { actions: _actions2['default'], reducer: _reducer2['default'] };
module.exports = exports['default'];