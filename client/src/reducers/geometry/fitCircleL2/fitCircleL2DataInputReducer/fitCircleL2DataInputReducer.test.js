import { PUSH_FIT_CIRCLE_L_TWO_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CIRCLE_L_TWO_INPUT } from '../../../../actions/clearInput/clearInputActions';
import FitCircleL2DataInputReducer from './fitCircleL2DataInputReducer';

describe('FitCircleL2DataInputReducer', () => {
  it('should handle PUSH_FIT_CIRCLE_L_TWO_COORDS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: PUSH_FIT_CIRCLE_L_TWO_COORDS,
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
    const result = FitCircleL2DataInputReducer(state, action);
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
      type: CLEAR_CIRCLE_L_TWO_INPUT,
    };
    const expectedState = {
      points: [],
    };
    const result = FitCircleL2DataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
