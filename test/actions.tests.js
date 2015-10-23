import expect from 'expect'
import types from '../src/action_types'
import {actions} from '../src'

const URL = 'http://example/com'
const EMAIL = 'a@example.co'
const PASSWORD = '123'

describe('actions', () => {

  it('should create an action to login', () => {
    const expected = {
      type: types.LOGIN,
      request: {
        url: URL,
        body: {
          email: EMAIL,
          password: PASSWORD,
        },
      },
    }
    const action = actions.login(URL, EMAIL, PASSWORD)
    expect(action.type).toEqual(expected.type)
    expect(action.request.url).toEqual(expected.request.url)
    expect(action.request._data.email).toEqual(expected.request.body.email)
    expect(action.request._data.password).toEqual(expected.request.body.password)
  })

  it('should create an action to register', () => {
    const expected = {
      type: types.REGISTER,
      request: {
        url: URL,
        body: {
          email: EMAIL,
          password: PASSWORD,
        },
      },
    }
    const action = actions.register(URL, EMAIL, PASSWORD)
    expect(action.type).toEqual(expected.type)
    expect(action.request.url).toEqual(expected.request.url)
    expect(action.request._data.email).toEqual(expected.request.body.email)
    expect(action.request._data.password).toEqual(expected.request.body.password)
  })

  it('should create an action to logout', () => {
    const expected = {
      type: types.LOGOUT,
      payload: {},
    }
    expect(actions.logout()).toEqual(expected)
  })

})
