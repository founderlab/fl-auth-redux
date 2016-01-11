'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = reducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var default_state = new _immutable2['default'].Map();

function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? default_state : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
    case 'RESET_START':
    case 'RESET_REQUEST_START':
    case 'CONFIRM_EMAIL_START':
      return state.merge({ loading: true, errors: null, reset_email_sent: false });

    case 'LOGIN_ERROR':
      return state.merge({ loading: false, errors: { login: action.error || action.res.body.error } });
    case 'REGISTER_ERROR':
      return state.merge({ loading: false, errors: { register: action.error || action.res.body.error } });
    case 'RESET_ERROR':
      return state.merge({ loading: false, errors: { reset: action.error || action.res.body.error } });
    case 'RESET_REQUEST_ERROR':
      return state.merge({ loading: false, errors: { reset_request: action.error || action.res.body.error } });
    case 'CONFIRM_EMAIL_ERROR':
      return state.merge({ loading: false, errors: { email_confirm: action.error || action.res.body.error } });

    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
    case 'RESET_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        user: action.res.body.user,
        access_token: action.res.body.access_token
      });
    case 'RESET_REQUEST_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        reset_email_sent: true
      });
    case 'CONFIRM_EMAIL_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        email_confirmed: true
      });

    case 'LOGOUT':
      return new _immutable2['default'].Map();

    default:
      return state;

  }
}

module.exports = exports['default'];