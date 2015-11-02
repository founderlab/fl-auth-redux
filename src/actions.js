import request from 'superagent'
import types from './action_types'

export function login(url, email, password, callback) {
  return {
    type: types.LOGIN,
    request: request.post(url).send({email, password}),
    callback,
  }
}

export function register(url, email, password, callback) {
  return {
    type: types.REGISTER,
    request: request.post(url).send({email, password}),
    callback,
  }
}

export function reset(url, email, password, reset_token, callback) {
  return {
    type: types.RESET,
    request: request.post(url).send({email, password, reset_token}),
    callback,
  }
}

export function resetRequest(url, email, callback) {
  return {
    type: types.RESET_REQUEST,
    request: request.post(url).send({email}),
    callback,
  }
}

export function logout() {
  return {
    type: types.LOGOUT,
    payload: {},
  }
}

export default {register, login, reset, resetRequest, logout}
