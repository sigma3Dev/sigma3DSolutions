import { SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS } from '../../../../actions/submitFitPlaneRansacCoords/submitFitPlaneRansacCoordsActions';
import fitPlaneRansacResultReducer from './fitPlaneRansacResultReducer';

describe('fitPlaneRansacResultReducer', () => {
  it('should handle SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS', () => {
    const state = {
      x: 0,
      y: 0,
      z: 0,
      i: 0,
      j: 0,
      k: 0,
      stdev: 0,
      numPoints: [],
    };
    const action = {
      type: SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS,
      response: {
        result: {
          x: 11.833,
          y: 8.633,
          z: 11.6,
          i: 0,
          j: 0,
          k: 1,
          stdev: 0,
          numPoints: 0,
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
      numPoints: 0,
    };
    const result = fitPlaneRansacResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
