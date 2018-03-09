import {
  SUBMIT_COORDS_REQUEST,
  SUBMIT_COORDS_SUCCESS,
  SUBMIT_COORDS_FAILURE,
} from '../../actions/submitCoords/submitCoordsActions';
import calculationStatusReducer from './calculationStatusReducer';

describe('calculationStatusReducer', () => {
  it('should handle SUBMIT_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false
    };
    const action = {
      type: SUBMIT_COORDS_REQUEST
    };
    const expectedState = {
      isCalculating: true
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState)
  });
  it('should handle SUBMIT_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true
    };
    const action = {
      type: SUBMIT_COORDS_SUCCESS
    };
    const expectedState = {
      isCalculating: false
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState)
  });
  it('should handle SUBMIT_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true
    };
    const action = {
      type: SUBMIT_COORDS_FAILURE
    };
    const expectedState = {
      isCalculating: false
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState)
  });
});