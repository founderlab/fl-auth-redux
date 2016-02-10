'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.login = login;
exports.register = register;
exports.reset = reset;
exports.resetRequest = resetRequest;
exports.confirmEmail = confirmEmail;
exports.logout = logout;
exports.updateUser = updateUser;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _action_types = require('./action_types');

var _action_types2 = _interopRequireDefault(_action_types);

function login(url, email, password, callback) {
  return {
    type: _action_types2['default'].LOGIN,
    request: _superagent2['default'].post(url).send({ email: email, password: password }),
    callback: callback
  };
}

function register(url, data, callback) {
  return {
    type: _action_types2['default'].REGISTER,
    request: _superagent2['default'].post(url).send(data),
    callback: callback
  };
}

function reset(url, email, password, reset_token, callback) {
  return {
    type: _action_types2['default'].RESET,
    request: _superagent2['default'].post(url).send({ email: email, password: password, reset_token: reset_token }),
    callback: callback
  };
}

function resetRequest(url, email, callback) {
  return {
    type: _action_types2['default'].RESET_REQUEST,
    request: _superagent2['default'].post(url).send({ email: email }),
    callback: callback
  };
}

function confirmEmail(url, email, token, callback) {
  return {
    type: _action_types2['default'].CONFIRM_EMAIL,
    request: _superagent2['default'].post(url).send({ email: email, token: token }),
    callback: callback
  };
}

function logout() {
  return {
    type: _action_types2['default'].LOGOUT,
    payload: {}
  };
}

function updateUser(user) {
  return {
    user: user,
    type: _action_types2['default'].USER_UPDATE
  };
}

exports['default'] = { register: register, login: login, reset: reset, resetRequest: resetRequest, logout: logout, updateUser: updateUser };