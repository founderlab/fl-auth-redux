import actions from './actions'
import reducer from './reducer'
import types from './action_types'
import accessTokenMiddleware, {createAccessTokenMiddleware} from './middleware/accessToken'
import requestLoggerMiddleware, {createRequestLoggerMiddleware} from './middleware/requestLogger'

export * from './actions'

export {
  actions,
  reducer,
  types,
  accessTokenMiddleware,
  createAccessTokenMiddleware,
  requestLoggerMiddleware,
  createRequestLoggerMiddleware,
}
export default {
  actions,
  reducer,
  types,
  accessTokenMiddleware,
  createAccessTokenMiddleware,
  requestLoggerMiddleware,
  createRequestLoggerMiddleware,
}
