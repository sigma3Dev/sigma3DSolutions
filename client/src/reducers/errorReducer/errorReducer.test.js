import { REMOVE_ERROR } from '../../actions/errorHandling/errorHandlingActions';
import { SUBMIT_3D_TRAFO_COORDS_FAILURE } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE } from '../../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';
import { SUBMIT_PARAM_INVERSION_COORDS_FAILURE } from '../../actions/paramInversionCoords/paramInversionCoordsActions';
import { SUBMIT_APPLY_TRAFO_VALUES_FAILURE } from '../../actions/submitApplyTransformationValues/submitApplyTransformationValuesActions';
import { SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE } from '../../actions/submitFitPlaneGaussCoords/submitFitPlaneGaussCoordsActions';
import { SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE } from '../../actions/submitFitPlaneRansacCoords/submitFitPlaneRansacCoordsActions';
import { SUBMIT_FIT_CYLINDER_COORDS_FAILURE } from '../../actions/submitFitCylinderCoords/submitFitCylinderCoordsActions';
import { SUBMIT_FIT_POINT_COORDS_FAILURE } from '../../actions/submitFitPointCoords/submitFitPointCoordsActions';
import { SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE } from '../../actions/submitFitLineL2Coords/submitFitLineL2CoordsActions';
import { SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE } from '../../actions/submitFitLineRansacCoords/submitFitLineRansacCoordsActions';
import { SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE } from '../../actions/submitFitCircleL2Coords/submitFitCircleL2CoordsActions';
import { SUBMIT_FIT_SPHERE_COORDS_FAILURE } from '../../actions/submitFitSphereCoords/submitFitSphereCoordsActions';
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
  it('should handle SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_CYLINDER_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_CYLINDER_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_POINT_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_POINT_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_SPHERE_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_FIT_SPHERE_COORDS_FAILURE,
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
