import request from 'superagent'
import types from './action_types'

export function login(url, email, password) {
  return {
    type: types.LOGIN,
    request: request.post(url).send({email, password}),
  }
}

export function register(url, email, password) {
  return {
    type: types.REGISTER,
    request: request.post(url).send({email, password}),
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
    payload: {},
  }
}

export default {register, login, logout}
