'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports.login = login;
exports.register = register;
exports.reset = reset;
exports.resetRequest = resetRequest;
exports.confirmEmail = confirmEmail;
exports.logout = logout;
exports.updateUser = updateUser;

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

function reset(url, email, password, resetToken, callback) {
  return {
    type: _action_types2['default'].RESET,
    request: _superagent2['default'].post(url).send({ email: email, password: password, resetToken: resetToken }),
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

function updateUser(user, callback) {
  return {
    user: user,
    type: _action_types2['default'].USER_UPDATE,
    callback: callback
  };
}

exports['default'] = { register: register, login: login, reset: reset, resetRequest: resetRequest, logout: logout, updateUser: updateUser };