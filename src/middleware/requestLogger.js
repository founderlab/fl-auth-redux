import _ from 'lodash'

const defaults = {
  getRequest: action => action.request,
  logRequest: request => console.log('[request]', request.method, request.url, request),
  getResponse: action => action.res,
  logResponse: response => console.log('[response]', response),
}

export function createRequestLoggerMiddleware(_options={}) {
  const options = _.merge(defaults, _options)

  return function requestLoggerMiddleware() {
    return next => action => {
      const request = options.getRequest(action)
      if (request) options.logRequest(request)
      const response = options.getResponse(action)
      if (response) options.logResponse(response)
      next(action)
    }
  }
}

export default createRequestLoggerMiddleware()
