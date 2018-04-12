import { PUSH_FIT_CHEBY_CIRCLE_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CHEBYSHEV_INPUT } from '../../../../actions/clearInput/clearInputActions';
import fitCircleChebyshevDataInputReducer from './fitCircleChebyshevDataInputReducer';

describe('fitCircleChebyshevDataInputReducer', () => {
  it('should handle PUSH_FIT_CHEBY_CIRCLE_COORDS', () => {
    const state = {
      circlePoints: [],
    };
    const action = {
      type: PUSH_FIT_CHEBY_CIRCLE_COORDS,
      coords: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
        },
      ],
    };
    const expectedState = {
      circlePoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
        },
      ],
    };
    const result = fitCircleChebyshevDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_CHEBYSHEV_INPUT', () => {
    const state = {
      circlePoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
        },
      ],
    };
    const action = {
      type: CLEAR_CHEBYSHEV_INPUT,
    };
    const expectedState = {
      circlePoints: [],
    };
    const result = fitCircleChebyshevDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
