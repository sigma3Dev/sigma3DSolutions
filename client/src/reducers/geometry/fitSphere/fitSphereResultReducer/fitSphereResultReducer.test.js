import { SUBMIT_FIT_SPHERE_COORDS_SUCCESS } from '../../../../actions/submitFitSphereCoords/submitFitSphereCoordsActions';
import fitSphereResultReducer from './fitSphereResultReducer';

describe('fitSphereResultReducer', () => {
  it('should handle SUBMIT_FIT_SPHERE_COORDS_SUCCESS', () => {
    const state = {
      x: 0,
      y: 0,
      z: 0,
      radius: 0,
      stdev: 0,
    };
    const action = {
      type: SUBMIT_FIT_SPHERE_COORDS_SUCCESS,
      response: {
        result: {
          x: 11.833,
          y: 8.633,
          z: 11.6,
          radius: 1,
          stdev: 0,
        },
      },
    };
    const expectedState = {
      x: 11.833,
      y: 8.633,
      z: 11.6,
      radius: 1,
      stdev: 0,
    };
    const result = fitSphereResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
