import {
  SWITCH_ANGLE_TYPE
} from '../../actions/switchAngleType/switchAngleTypeActions';
import isEulerReducer from './isEulerReducer';

describe('isEulerReducer', () => {
  it('should handle SWITCH_ANGLE_TYPE', () => {
    const state = {
      isEuler: false
    };
    const action = {
      type: SWITCH_ANGLE_TYPE
    };
    const expectedState = {
      isEuler: true
    };
    const result = isEulerReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});