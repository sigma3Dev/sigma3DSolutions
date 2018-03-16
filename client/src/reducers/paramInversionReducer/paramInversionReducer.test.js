import {
  SUBMIT_PARAM_INVERSION_COORDS_SUCCESS,
  PUSH_PARAM_INVERSION_COORDS,
} from '../../actions/paramInversionCoords/paramInversionCoordsActions';

import {
  CLEAR_INPUT,
} from '../../actions/clearInput/clearInputActions';

import paramInversionReducer from './paramInversionReducer';

describe('paramInversionReducer', () => {
  it('should handle SUBMIT_PARAM_INVERSION_COORDS_SUCCESS', () => {
    const state = {
      tx: 0,
      ty: 0,
      tz: 0,
      q0: 0,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 0
    };
    const action = {
      type: SUBMIT_PARAM_INVERSION_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            q0:-0.9950785875879063,
            q1:-0.004830151859800749,
            q2:-0.0006079507786298357,
            q3:0.09896921012577276,
            tx:1380.4859742435729,
            ty:9336.536415479428,
            tz:-3796.3960642844177,
            m: 1.0
          }
        }
      }
    };
    const expectedState = {
      tx:1380.4859742435729,
      ty:9336.536415479428,
      tz:-3796.3960642844177,
      q0:-0.9950785875879063,
      q1:-0.004830151859800749,
      q2:-0.0006079507786298357,
      q3:0.09896921012577276,
      m: 1.0
    };
    const result = paramInversionReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_INPUT', () => {
    const state = {
      tx: 10,
      ty: 20,
      tz: 30,
      q0: 40,
      q1: 10,
      q2: 20,
      q3: 30,
      m: 1
    };
    const action = {
      type: CLEAR_INPUT,
    };
    const expectedState = {
      tx: 0,
      ty: 0,
      tz: 0,
      q0: 0,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 0
    };
    const result = paramInversionReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_INPUT', () => {
    const state = {
      tx: 0,
      ty: 0,
      tz: 0,
      q0: 0,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 0
    };
    const action = {
      type: PUSH_PARAM_INVERSION_COORDS,
      coords: {
        tx: 10,
        ty: 10,
        tz: 10,
        q0: 1,
        q1: 0,
        q2: 0,
        q3: 0,
        m: 1
      }
    };
    const expectedState = {
      tx: 10,
      ty: 10,
      tz: 10,
      q0: 1,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 1
    };
    const result = paramInversionReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});