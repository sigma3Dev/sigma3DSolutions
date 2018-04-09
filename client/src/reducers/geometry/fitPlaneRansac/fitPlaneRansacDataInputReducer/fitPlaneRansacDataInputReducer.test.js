import { PUSH_FIT_PLANE_RANSAC_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_PLANE_RANSAC_INPUT } from '../../../../actions/clearInput/clearInputActions';
import FitPlaneRansacDataInputReducer from './fitPlaneRansacDataInputReducer';

describe('FitPlaneRansacDataInputReducer', () => {
  it('should handle PUSH_FIT_PLANE_RANSAC_COORDS', () => {
    const state = {
      params: {},
    };
    const action = {
      type: PUSH_FIT_PLANE_RANSAC_COORDS,
      coords: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
        {
          x: 4,
          y: 5,
          z: 6,
        },
      ],
    };
    const expectedState = {
      params: {
        points: [
          {
            x: 1,
            y: 2,
            z: 3,
          },
          {
            x: 4,
            y: 5,
            z: 6,
          },
        ],
      },
    };
    const result = FitPlaneRansacDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_PLANE_RANSAC_INPUT', () => {
    const state = {
      params: {
        points: [
          {
            x: 1,
            y: 2,
            z: 3,
          },
          {
            x: 4,
            y: 5,
            z: 6,
          },
        ],
        tolerance: 0.2,
      },
    };
    const action = {
      type: CLEAR_PLANE_RANSAC_INPUT,
    };
    const expectedState = {
      params: {
        points: [],
        tolerance: 0.2,
      },
    };
    const result = FitPlaneRansacDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
