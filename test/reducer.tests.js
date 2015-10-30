import expect from 'expect'
import Immutable, {fromJS} from 'immutable'
import types from '../src/action_types'
import {reducer} from '../src'

const suffixes = {
  START: '_START',
  ERROR: '_ERROR',
  SUCCESS: '_SUCCESS',
}

const ACCESS_TOKEN = 'asdf'
const EMAIL = 'a@example.co'

describe('reducer', () => {


  it('should return the initial state', () => {
    expect(Immutable.is(reducer(undefined, {}), new Immutable.Map())).toBe(true)
  })


  it('should handle LOGOUT', () => {
    const initial_state = new Immutable.Map()
    const result = reducer(initial_state, {
      type: types.LOGOUT,
    })
    const expected = new Immutable.Map({})
    expect(Immutable.is(result, expected)).toBe(true)
  })


  it('should handle LOGIN_START', () => {
    const initial_state = new Immutable.Map()
    const result = reducer(initial_state, {
      type: types.LOGIN + suffixes.START,
    })
    const expected = new Immutable.Map({loading: true, errors: null, reset_email_sent: false})
    expect(Immutable.is(result, expected)).toBe(true)
  })

  it('should handle REGISTER_START', () => {
    const initial_state = new Immutable.Map()
    const result = reducer(initial_state, {
      type: types.REGISTER + suffixes.START,
    })
    const expected = new Immutable.Map({loading: true, errors: null, reset_email_sent: false})
    expect(Immutable.is(result, expected)).toBe(true)
  })

  it('should handle RESET_START', () => {
    const initial_state = new Immutable.Map()
    const result = reducer(initial_state, {
      type: types.RESET + suffixes.START,
    })
    const expected = new Immutable.Map({loading: true, errors: null, reset_email_sent: false})
    expect(Immutable.is(result, expected)).toBe(true)
  })


  it('should handle LOGIN_ERROR', () => {
    const initial_state = new Immutable.Map()
    const error = 'bad things'
    const actions = [{
      type: types.LOGIN + suffixes.ERROR,
      error,
    }, {
      type: types.LOGIN + suffixes.ERROR,
      res: {body: {error}},
    }]
    actions.forEach(action => {
      const result = reducer(initial_state, action)
      const expected = fromJS({loading: false, errors: {login: error}})
      expect(Immutable.is(result, expected)).toBe(true)
    })
  })

  it('should handle REGISTER_ERROR', () => {
    const initial_state = new Immutable.Map()
    const error = 'bad things'
    const actions = [{
      type: types.REGISTER + suffixes.ERROR,
      error,
    }, {
      type: types.REGISTER + suffixes.ERROR,
      res: {body: {error}},
    }]
    actions.forEach(action => {
      const result = reducer(initial_state, action)
      const expected = fromJS({loading: false, errors: {register: error}})
      expect(Immutable.is(result, expected)).toBe(true)
    })
  })

  it('should handle RESET_ERROR', () => {
    const initial_state = new Immutable.Map()
    const error = 'bad things'
    const actions = [{
      type: types.RESET + suffixes.ERROR,
      error,
    }, {
      type: types.RESET + suffixes.ERROR,
      res: {body: {error}},
    }]
    actions.forEach(action => {
      const result = reducer(initial_state, action)
      const expected = fromJS({loading: false, errors: {reset: error}})
      expect(Immutable.is(result, expected)).toBe(true)
    })
  })


  it('should handle LOGIN_SUCCESS', () => {
    const initial_state = new Immutable.Map()
    const action = {
      type: types.LOGIN + suffixes.SUCCESS,
      res: {body: {access_token: ACCESS_TOKEN, user: {email: EMAIL}}},
    }
    const result = reducer(initial_state, action)
    const expected = fromJS({loading: false, errors: null, access_token: ACCESS_TOKEN, email: EMAIL})
    expect(Immutable.is(result, expected)).toBe(true)
  })

  it('should handle REGISTER_SUCCESS', () => {
    const initial_state = new Immutable.Map()
    const action = {
      type: types.REGISTER + suffixes.SUCCESS,
      res: {body: {access_token: ACCESS_TOKEN, user: {email: EMAIL}}},
    }
    const result = reducer(initial_state, action)
    const expected = fromJS({loading: false, errors: null, access_token: ACCESS_TOKEN, email: EMAIL})
    expect(Immutable.is(result, expected)).toBe(true)
  })

  it('should handle RESET_SUCCESS', () => {
    const initial_state = new Immutable.Map()
    const action = {
      type: types.RESET + suffixes.SUCCESS,
      res: {body: {}},
    }
    const result = reducer(initial_state, action)
    const expected = fromJS({loading: false, errors: null, reset_email_sent: true})
    expect(Immutable.is(result, expected)).toBe(true)
  })

})
