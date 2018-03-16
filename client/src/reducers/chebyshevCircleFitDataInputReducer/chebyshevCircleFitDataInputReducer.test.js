import {
  PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES
} from '../../actions/pushChebyshevCircleFitCoords/pushChebyshevCircleFitCoordsActions';
import {
  CLEAR_INPUT
} from '../../actions/clearInput/clearInputActions';
import chebyshevCircleFitDataInputReducer from './chebyshevCircleFitDataInputReducer';

describe('chebyshevCircleFitDataInputReducer', () => {
  it('should handle PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES', () => {
    const state = {
      circlePoints: []
    };
    const action = {
      type: PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES,
      coords: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0
        }, {
          x: 4.0,
          y: 5.0, 
          z: 6.0
        }
      ]
    };
    const expectedState = {
      circlePoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0
        }, {
          x: 4.0,
          y: 5.0, 
          z: 6.0
        }
      ]
    };
    const result = chebyshevCircleFitDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_INPUT', () => {
    const state = {
      circlePoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0
        }, {
          x: 4.0,
          y: 5.0, 
          z: 6.0
        }
      ]
    };
    const action = {
      type: CLEAR_INPUT,
    };
    const expectedState = {
      circlePoints: []
    };
    const result = chebyshevCircleFitDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});

