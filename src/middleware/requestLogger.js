import _ from 'lodash'

const defaults = {
  getRequest: action => action.request,
  log: request => console.log('::', request.method, request.url, request),
}

export function createRequestLoggerMiddleware(_options={}) {
  const options = _.merge(defaults, _options)

  return function requestLoggerMiddleware() {
    return next => action => {
      const request = options.getRequest(action)
      if (request) options.log(request)
      next(action)
    }
  }
}

export default createRequestLoggerMiddleware()
