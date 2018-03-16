import { SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS } from '../../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';
import chebyshevCircleFitResultReducer from './chebyshevCircleFitResultReducer';

describe('chebyshevCircleFitResultReducer', () => {
  it('should handle SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS', () => {
    const state = {
      x: 0.00,
      y: 0.00,
      z: 0.00,
      i: 0.00000,
      j: 0.00000,
      k: 0.00000,
      radius: 0.0,
      tschebyDistance: 0.0,
      stdev: 0.0
    };
    const action = {
      type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            x: 0.00,
            y: 0.00,
            z: 0.00,
            i: 0.00000,
            j: 0.00000,
            k: 1.00000,
            radius: 1.0,
            tschebyDistance: 0.0,
            stdev: 0.0
          }
        }
      }
    };
    const expectedState = {
      x: 0.00,
      y: 0.00,
      z: 0.00,
      i: 0.00000,
      j: 0.00000,
      k: 1.00000,
      radius: 1.0,
      tschebyDistance: 0.0,
      stdev: 0.0
    };
    const result = chebyshevCircleFitResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});