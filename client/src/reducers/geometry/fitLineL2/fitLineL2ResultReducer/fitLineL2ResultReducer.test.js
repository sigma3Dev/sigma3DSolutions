import { SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS } from '../../../../actions/submitFitLineL2Coords/submitFitLineL2CoordsActions';
import fitLineL2ResultReducer from './fitLineL2ResultReducer';

describe('fitLineL2ResultReducer', () => {
  it('should handle SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS', () => {
    const state = {
      x: 0,
      y: 0,
      z: 0,
      i: 0,
      j: 0,
      k: 0,
      stdev: 0,
    };
    const action = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS,
      response: {
        result: {
          x: 11.833,
          y: 8.633,
          z: 11.6,
          i: 0,
          j: 0,
          k: 1,
          stdev: 0,
        },
      },
    };
    const expectedState = {
      x: 11.833,
      y: 8.633,
      z: 11.6,
      i: 0,
      j: 0,
      k: 1,
      stdev: 0,
    };
    const result = fitLineL2ResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
