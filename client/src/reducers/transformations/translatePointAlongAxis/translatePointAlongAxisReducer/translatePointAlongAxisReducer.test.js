import { SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS } from '../../../../actions/translatePointAlongAxisCoords/translatePointAlongAxisCoordsActions';

import translatePointAlongAxisReducer from './translatePointAlongAxisReducer';

describe('translatePointAlongAxisReducer', () => {
  it('should handle SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS', () => {
    const state = {
      x: 0,
      y: 0,
      z: 0,
    };
    const action = {
      type: SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            x: 1380.4859742435729,
            y: 9336.536415479428,
            z: -3796.3960642844177,
          },
        },
      },
    };
    const expectedState = {
      x: 1380.4859742435729,
      y: 9336.536415479428,
      z: -3796.3960642844177,
    };
    const result = translatePointAlongAxisReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
