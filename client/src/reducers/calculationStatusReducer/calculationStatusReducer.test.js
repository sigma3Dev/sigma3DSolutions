import {
  SUBMIT_3D_TRAFO_COORDS_REQUEST,
  SUBMIT_3D_TRAFO_COORDS_SUCCESS,
  SUBMIT_3D_TRAFO_COORDS_FAILURE,
} from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';

import {
  SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST,
  SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS,
  SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE,
} from '../../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';

import {
  SUBMIT_APPLY_TRAFO_VALUES_REQUEST,
  SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
  SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
} from '../../actions/submitApplyTransformationValues/submitApplyTransformationValuesActions';

import {
  SUBMIT_FIT_PLANE_COORDS_REQUEST,
  SUBMIT_FIT_PLANE_COORDS_SUCCESS,
  SUBMIT_FIT_PLANE_COORDS_FAILURE,
} from '../../actions/submitFitPlaneCoords/submitFitPlaneCoordsActions';

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
  it('should handle SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_APPLY_TRAFO_VALUES_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_APPLY_TRAFO_VALUES_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_APPLY_TRAFO_VALUES_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_APPLY_TRAFO_VALUES_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
