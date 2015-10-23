'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.login = login;
exports.register = register;
exports.logout = logout;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _action_types = require('./action_types');

var _action_types2 = _interopRequireDefault(_action_types);

function login(url, email, password) {
  return {
    type: _action_types2['default'].LOGIN,
    request: _superagent2['default'].post(url).send({ email: email, password: password })
  };
}

function register(url, email, password) {
  return {
    type: _action_types2['default'].REGISTER,
    request: _superagent2['default'].post(url).send({ email: email, password: password })
  };
}

function logout() {
  return {
    type: _action_types2['default'].LOGOUT,
    payload: {}
  };
}

exports['default'] = { register: register, login: login, logout: logout };