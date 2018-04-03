import { SUBMIT_APPLY_TRAFO_VALUES_SUCCESS } from '../../actions/submitApplyTransformationValuesActions/submitApplyTransformationValuesActions';
import applyTrafoDataResultReducer from './applyTrafoDataResultReducer';

describe('applyTrafoDataResultReducer', () => {
  it('should handle SUBMIT_APPLY_TRAFO_VALUES_SUCCESS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
      response: [
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
    const result = applyTrafoDataResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
