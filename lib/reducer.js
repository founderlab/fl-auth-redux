'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports['default'] = reducer;

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var defaultState = new _immutable2['default'].Map();

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
    case 'RESET_START':
    case 'RESET_REQUEST_START':
    case 'CONFIRM_EMAIL_START':
    case 'USER_UPDATE_START':
      return state.merge({ loading: true, errors: null, resetEmailSent: false });

    case 'LOGIN_ERROR':
      return state.merge({ loading: false, errors: { login: action.error || action.res.body.error } });
    case 'REGISTER_ERROR':
      return state.merge({ loading: false, errors: { register: action.error || action.res.body.error } });
    case 'RESET_ERROR':
      return state.merge({ loading: false, errors: { reset: action.error || action.res.body.error } });
    case 'RESET_REQUEST_ERROR':
      return state.merge({ loading: false, errors: { reset_request: action.error || action.res.body.error } });
    case 'CONFIRM_EMAIL_ERROR':
      return state.merge({ loading: false, errors: { confirm_email: action.error || action.res.body.error } });
    case 'USER_UPDATE_ERROR':
      return state.merge({ loading: false, errors: { userUpdate: action.error || action.res.body.error } });

    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
    case 'RESET_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        user: action.res.body.user,
        accessToken: action.res.body.accessToken
      });
    case 'RESET_REQUEST_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        resetEmailSent: true
      });
    case 'CONFIRM_EMAIL_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        emailConfirmed: true
      });

    case 'USER_UPDATE_SUCCESS':
      return state.mergeDeep({
        loading: false,
        errors: null,
        user: action.model
      });

    case 'LOGOUT':
      return new _immutable2['default'].Map();

    default:
      return state;

  }
}

module.exports = exports['default'];