import { CALCULATE_TRAFO_DIFFERENCE_SUCCESS } from '../../actions/submitCoords/submitCoordsActions';
import threeDTrafoResultDifferenceReducer from './threeDTrafoResultDifferenceReducer';

describe('threeDTrafoResultDifferenceReducer', () => {
  it('should handle CALCULATE_TRAFO_DIFFERENCE_SUCCESS', () => {
    const state = [];
    const action = {
      type: CALCULATE_TRAFO_DIFFERENCE_SUCCESS,
      response: {
        data: [
          {
            vx: 0.06,
            vy: 0.13,
            vz: 0.44,
            v: 0.35
          }, {
            vx: 0.81,
            vy: 0.26,
            vz: 0.11,
            v: 0.59
          }
        ]
      }
    };
    const expectedState = {
      difference: [
        {
          vx: 0.06,
          vy: 0.13,
          vz: 0.44,
          v: 0.35
        }, {
          vx: 0.81,
          vy: 0.26,
          vz: 0.11,
          v: 0.59
        }
      ]
    };
    const result = threeDTrafoResultDifferenceReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});