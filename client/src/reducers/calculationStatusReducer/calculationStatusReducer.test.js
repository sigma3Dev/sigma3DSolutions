import {
  SUBMIT_3D_TRAFO_COORDS_REQUEST,
  SUBMIT_3D_TRAFO_COORDS_SUCCESS,
  SUBMIT_3D_TRAFO_COORDS_FAILURE,
} from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import calculationStatusReducer from './calculationStatusReducer';

describe('calculationStatusReducer', () => {
  it('should handle SUBMIT_3D_TRAFO_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_3D_TRAFO_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_3D_TRAFO_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_3D_TRAFO_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_3D_TRAFO_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_3D_TRAFO_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
