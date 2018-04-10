import { PUSH_FIT_CYLINDER_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CYLINDER_INPUT } from '../../../../actions/clearInput/clearInputActions';
import FitCylinderDataInputReducer from './fitCylinderDataInputReducer';

describe('FitCylinderDataInputReducer', () => {
  it('should handle PUSH_FIT_CYLINDER_COORDS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: PUSH_FIT_CYLINDER_COORDS,
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
    const result = FitCylinderDataInputReducer(state, action);
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
      type: CLEAR_CYLINDER_INPUT,
    };
    const expectedState = {
      points: [],
    };
    const result = FitCylinderDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
