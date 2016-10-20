'use strict';

exports.__esModule = true;
exports['default'] = reducer;

var _immutable = require('immutable');

var defaultState = _immutable.fromJS({
  loading: false,
  errors: {}
});

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
      return state.merge({ loading: true, errors: {}, resetEmailSent: false });

    case 'LOGIN_ERROR':
      return state.merge({ loading: false, errors: { login: action.error || action.res.body.error } });
    case 'REGISTER_ERROR':
      return state.merge({ loading: false, errors: { register: action.error || action.res.body.error } });
    case 'RESET_ERROR':
      return state.merge({ loading: false, errors: { reset: action.error || action.res.body.error } });
    case 'RESET_REQUEST_ERROR':
      return state.merge({ loading: false, errors: { resetRequest: action.error || action.res.body.error } });
    case 'CONFIRM_EMAIL_ERROR':
      return state.merge({ loading: false, errors: { confirmEmail: action.error || action.res.body.error } });
    case 'USER_UPDATE_ERROR':
      return state.merge({ loading: false, errors: { userUpdate: action.error || action.res.body.error } });

    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
    case 'RESET_SUCCESS':
      return state.merge({
        loading: false,
        errors: {},
        user: action.res.body.user,
        accessToken: action.res.body.accessToken
      });
    case 'RESET_REQUEST_SUCCESS':
      return state.merge({
        loading: false,
        errors: {},
        resetEmailSent: true
      });
    case 'CONFIRM_EMAIL_SUCCESS':
      return state.merge({
        loading: false,
        errors: {},
        emailConfirmed: true
      });

    case 'USER_UPDATE_SUCCESS':
      return state.mergeDeep({
        loading: false,
        errors: {},
        user: action.model
      });

    case 'LOGOUT':
      return defaultState;

    default:
      return state;

  }
}

module.exports = exports['default'];