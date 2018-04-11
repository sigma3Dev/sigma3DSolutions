import { PUSH_FIT_POINT_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_POINT_INPUT } from '../../../../actions/clearInput/clearInputActions';
import fitPointDataInputReducer from './fitPointDataInputReducer';

describe('FitPointDataInputReducer', () => {
  it('should handle PUSH_FIT_POINT_COORDS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: PUSH_FIT_POINT_COORDS,
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
    };
    const result = fitPointDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_APPLY_TRAFO_INPUT', () => {
    const state = {
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
    };
    const action = {
      type: CLEAR_POINT_INPUT,
    };
    const expectedState = {
      points: [],
    };
    const result = fitPointDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
