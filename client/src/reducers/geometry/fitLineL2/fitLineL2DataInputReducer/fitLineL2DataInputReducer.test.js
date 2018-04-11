import { PUSH_FIT_LINE_L_TWO_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_LINE_L_TWO_INPUT } from '../../../../actions/clearInput/clearInputActions';
import FitLineL2DataInputReducer from './fitLineL2DataInputReducer';

describe('FitLineL2DataInputReducer', () => {
  it('should handle PUSH_FIT_LINE_L_TWO_COORDS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: PUSH_FIT_LINE_L_TWO_COORDS,
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
    const result = FitLineL2DataInputReducer(state, action);
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
      type: CLEAR_LINE_L_TWO_INPUT,
    };
    const expectedState = {
      points: [],
    };
    const result = FitLineL2DataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
