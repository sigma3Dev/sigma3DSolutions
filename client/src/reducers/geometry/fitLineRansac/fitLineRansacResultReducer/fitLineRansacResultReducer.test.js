import { SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS } from '../../../../actions/submitFitLineRansacCoords/submitFitLineRansacCoordsActions';
import fitLineRansacResultReducer from './fitLineRansacResultReducer';

describe('fitLineRansacResultReducer', () => {
  it('should handle SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS', () => {
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
      type: SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS,
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
    const result = fitLineRansacResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
