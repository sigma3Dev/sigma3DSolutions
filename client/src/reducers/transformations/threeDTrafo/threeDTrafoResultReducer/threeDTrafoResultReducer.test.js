import { SUBMIT_3D_TRAFO_COORDS_SUCCESS } from '../../../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import threeDTrafoResultReducer from './threeDTrafoResultReducer';

describe('threeDTrafoResultReducer', () => {
  it('should handle SUBMIT_3D_TRAFO_COORDS_SUCCESS', () => {
    const state = {
      tx: 0,
      ty: 0,
      tz: 0,
      q0: 0,
      q1: 0,
      q2: 0,
      q3: 0,
    };
    const action = {
      type: SUBMIT_3D_TRAFO_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            q0: -0.9950785875879063,
            q1: -0.004830151859800749,
            q2: -0.0006079507786298357,
            q3: 0.09896921012577276,
            tx: 1380.4859742435729,
            ty: 9336.536415479428,
            tz: -3796.3960642844177,
          },
        },
      },
    };
    const expectedState = {
      tx: 1380.4859742435729,
      ty: 9336.536415479428,
      tz: -3796.3960642844177,
      q0: -0.9950785875879063,
      q1: -0.004830151859800749,
      q2: -0.0006079507786298357,
      q3: 0.09896921012577276,
    };
    const result = threeDTrafoResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
