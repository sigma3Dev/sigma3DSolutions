import { SUBMIT_FIT_CYLINDER_COORDS_SUCCESS } from '../../../../actions/submitFitCylinderCoords/submitFitCylinderCoordsActions';
import fitCylinderResultReducer from './fitCylinderResultReducer';

describe('fitCylinderResultReducer', () => {
  it('should handle SUBMIT_FIT_CYLINDER_COORDS_SUCCESS', () => {
    const state = {
      x: 0,
      y: 0,
      z: 0,
      i: 0,
      j: 0,
      k: 0,
      radius: 0,
      stdev: 0,
      fittingErrors: [],
    };
    const action = {
      type: SUBMIT_FIT_CYLINDER_COORDS_SUCCESS,
      response: {
        result: {
          x: 11.833,
          y: 8.633,
          z: 11.6,
          i: 0,
          j: 0,
          k: 1,
          radius: 1,
          stdev: 0,
          fittingErrors: [0, 0, 0],
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
      radius: 1,
      stdev: 0,
      fittingErrors: [0, 0, 0],
    };
    const result = fitCylinderResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
