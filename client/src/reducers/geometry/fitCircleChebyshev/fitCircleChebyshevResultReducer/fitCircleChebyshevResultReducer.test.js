import { SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS } from '../../../../actions/submitFitCircleChebyshevCoords/submitFitCircleChebyshevCoordsActions';
import fitCircleChebyshevResultReducer from './fitCircleChebyshevResultReducer';

describe('fitCircleChebyshevResultReducer', () => {
  it('should handle SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS', () => {
    const state = {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      i: 0.0,
      j: 0.0,
      k: 0.0,
      radius: 0.0,
      tschebyDistance: 0.0,
      stdev: 0.0,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            x: 0.0,
            y: 0.0,
            z: 0.0,
            i: 0.0,
            j: 0.0,
            k: 1.0,
            radius: 1.0,
            tschebyDistance: 0.0,
            stdev: 0.0,
          },
        },
      },
    };
    const expectedState = {
      x: 0.0,
      y: 0.0,
      z: 0.0,
      i: 0.0,
      j: 0.0,
      k: 1.0,
      radius: 1.0,
      tschebyDistance: 0.0,
      stdev: 0.0,
    };
    const result = fitCircleChebyshevResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
