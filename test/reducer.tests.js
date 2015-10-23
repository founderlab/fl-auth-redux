import expect from 'expect'
import Immutable from 'immutable'
import types from '../src/action_types'
import {reducer} from '../src'

const suffixes = {
  START: '_START',
  ERROR: '_ERROR',
  SUCCESS: '_SUCCESS',
}

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
    const expected = new Immutable.Map({loading: true, login_error: null, register_error: null})
    expect(Immutable.is(result, expected)).toBe(true)
  })

  it('should handle REGISTER_START', () => {
    const initial_state = new Immutable.Map()
    const result = reducer(initial_state, {
      type: types.REGISTER + suffixes.START,
    })
    const expected = new Immutable.Map({loading: true, login_error: null, register_error: null})
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
      const expected = new Immutable.Map({loading: false, register_error: null, login_error: error})
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
      const expected = new Immutable.Map({loading: false, register_error: error, login_error: null})
      expect(Immutable.is(result, expected)).toBe(true)
    })
  })


  it('should handle LOGIN_SUCCESS', () => {
    const initial_state = new Immutable.Map()
    const action = {
      type: types.LOGIN + suffixes.SUCCESS,
      res: {body: {user: {email: 'test@example.com'}}},
    }
    const result = reducer(initial_state, action)
    const expected = new Immutable.Map({loading: false, register_error: null, login_error: null, email: action.res.body.user.email})
    expect(Immutable.is(result, expected)).toBe(true)
  })

  it('should handle REGISTER_SUCCESS', () => {
    const initial_state = new Immutable.Map()
    const action = {
      type: types.REGISTER + suffixes.SUCCESS,
      res: {body: {user: {email: 'test@example.com'}}},
    }
    const result = reducer(initial_state, action)
    const expected = new Immutable.Map({loading: false, register_error: null, login_error: null, email: action.res.body.user.email})
    expect(Immutable.is(result, expected)).toBe(true)
  })


})
