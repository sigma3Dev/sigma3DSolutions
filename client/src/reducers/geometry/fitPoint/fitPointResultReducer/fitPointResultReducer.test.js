import { SUBMIT_FIT_POINT_COORDS_SUCCESS } from '../../../../actions/submitFitPointCoords/submitFitPointCoordsActions';
import fitPointResultReducer from './fitPointResultReducer';

describe('fitPointResultReducer', () => {
  it('should handle SUBMIT_FIT_POINT_COORDS_SUCCESS', () => {
    const state = {
      x: 0,
      y: 0,
      z: 0,
      stdev: 0,
      fittingErrors: [],
    };
    const action = {
      type: SUBMIT_FIT_POINT_COORDS_SUCCESS,
      response: {
        result: {
          x: 11.833,
          y: 8.633,
          z: 11.6,
          stdev: 0,
          fittingErrors: [0, 0, 0],
        },
      },
    };
    const expectedState = {
      x: 11.833,
      y: 8.633,
      z: 11.6,
      stdev: 0,
      fittingErrors: [0, 0, 0],
    };
    const result = fitPointResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
