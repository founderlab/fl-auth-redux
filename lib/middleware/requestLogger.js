'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports.createRequestLoggerMiddleware = createRequestLoggerMiddleware;

var _lodashObjectMerge = require('lodash/object/merge');

var _lodashObjectMerge2 = _interopRequireDefault(_lodashObjectMerge);

var defaults = {
  getRequest: function getRequest(action) {
    return action.request;
  },
  log: function log(request) {
    return console.log('::', request.method, request.url, request);
  }
};

function createRequestLoggerMiddleware() {
  var _options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var options = _lodashObjectMerge2['default'](defaults, _options);

  return function requestLoggerMiddleware() {
    return function (next) {
      return function (action) {
        var request = options.getRequest(action);
        if (request) options.log(request);
        next(action);
      };
    };
  };
}

exports['default'] = createRequestLoggerMiddleware();