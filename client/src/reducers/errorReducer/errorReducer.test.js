import { REMOVE_ERROR } from '../../actions/errorHandling/errorHandlingActions';
import { SUBMIT_3D_TRAFO_COORDS_FAILURE } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE } from '../../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';
import { SUBMIT_PARAM_INVERSION_COORDS_FAILURE } from '../../actions/paramInversionCoords/paramInversionCoordsActions';
import { SUBMIT_APPLY_TRAFO_VALUES_FAILURE } from '../../actions/submitApplyTransformationValues/submitApplyTransformationValuesActions';
import { SUBMIT_FIT_PLANE_COORDS_FAILURE } from '../../actions/submitFitPlaneCoords/submitFitPlaneCoordsActions';
import errorReducer from './errorReducer';

describe('errorReducer', () => {
  it('should handle REMOVE_ERROR', () => {
    const state = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const action = {
      type: REMOVE_ERROR,
    };
    const expectedState = {
      error: null,
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_3D_TRAFO_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_3D_TRAFO_COORDS_FAILURE,
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expectedState = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE,
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expectedState = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_PARAM_INVERSION_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_PARAM_INVERSION_COORDS_FAILURE,
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expectedState = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_APPLY_TRAFO_VALUES_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expectedState = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_PLANE_COORDS_FAILURE,
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expectedState = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
