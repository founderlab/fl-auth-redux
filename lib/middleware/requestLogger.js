'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createRequestLoggerMiddleware = createRequestLoggerMiddleware;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashMerge = require('lodash/merge');

var _lodashMerge2 = _interopRequireDefault(_lodashMerge);

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

  var options = (0, _lodashMerge2['default'])(defaults, _options);

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