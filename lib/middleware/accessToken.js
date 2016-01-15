// accessTokenMiddleware appends an access token to any superagent request it finds on an action
// It's designed to work alongside requestMiddleware which will perform the requests and dispatch the relevant (sub)-actions
// It must be included *before* redux-request-middleware when combining middleware
// Otherwise the requests will be sent before it has a chance to attach the token

// options:
//  getRequest(action):           Return a request from an action, defaults to returning action.request
//  getToken(store):              A function that returns an access token given a redux store.
//                                By default it'll look for it on a property called `auth`.
//  appendToken(request, token):  Function to append a token to the request. Builtin options are appendTokenHeader and appendTokenQuery
//                    appendTokenHeader (default): token is added to the request header as a bearer token with `request.set({authorization: `Bearer ${access_token}`})`
//                    appendTokenQuery: token is added to the query string as `request.query({$access_token: access_token})`
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports.getToken = getToken;
exports.appendTokenHeader = appendTokenHeader;
exports.appendTokenQuery = appendTokenQuery;
exports.createAccessTokenMiddleware = createAccessTokenMiddleware;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function getToken(store) {
  var auth = store.getState().auth;
  if (!auth) return null;
  return auth.get ? auth.get('access_token') : auth.access_token;
}

function appendTokenHeader(request, access_token) {
  request.set({ authorization: 'Bearer ' + access_token });
  return request;
}

function appendTokenQuery(request, access_token) {
  request.query({ $access_token: access_token });
  return request;
}

var defaults = {
  getToken: getToken,
  getRequest: function getRequest(action) {
    return action.request;
  },
  appendToken: appendTokenHeader
};

function createAccessTokenMiddleware() {
  var _options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var options = _lodash2['default'].merge(defaults, _options);

  return function accessTokenMiddleware(store) {
    return function (next) {
      return function (action) {

        var request = options.getRequest(action);
        var access_token = options.getToken(store);
        if (request && access_token) options.appendToken(request, access_token);
        next(action);
      };
    };
  };
}

exports['default'] = createAccessTokenMiddleware();