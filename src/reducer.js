import Immutable from 'immutable'

const default_state = new Immutable.Map()

export default function authReducer(state=default_state, action={}) {

  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
    case 'RESET_START':
    case 'RESET_REQUEST_START':
      return state.merge({loading: true, errors: null, reset_email_sent: false})

    case 'LOGIN_ERROR':
      return state.merge({loading: false, errors: {login: action.error || action.res.body.error}})
    case 'REGISTER_ERROR':
      return state.merge({loading: false, errors: {register: action.error || action.res.body.error}})
    case 'RESET_ERROR':
      return state.merge({loading: false, errors: {reset: action.error || action.res.body.error}})
    case 'RESET_REQUEST_ERROR':
      return state.merge({loading: false, errors: {reset_request: action.error || action.res.body.error}})

    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
    case 'RESET_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        email: action.res.body.user.email,
        access_token: action.res.body.access_token,
      })
    case 'RESET_REQUEST_SUCCESS':
      return state.merge({
        loading: false,
        errors: null,
        reset_email_sent: true,
      })

    case 'LOGOUT':
      return new Immutable.Map()

    default:
      return state

  }
}
