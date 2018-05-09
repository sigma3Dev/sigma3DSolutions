import {
  SUBMIT_3D_TRAFO_COORDS_REQUEST,
  SUBMIT_3D_TRAFO_COORDS_SUCCESS,
  SUBMIT_3D_TRAFO_COORDS_FAILURE,
} from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';

import {
  SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_REQUEST,
  SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS,
  SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_FAILURE,
} from '../../actions/submitFitCircleChebyshevCoords/submitFitCircleChebyshevCoordsActions';

import {
  SUBMIT_APPLY_TRAFO_VALUES_REQUEST,
  SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
  SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
} from '../../actions/submitApplyTransformationValues/submitApplyTransformationValuesActions';

import {
  SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST,
  SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS,
  SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE,
} from '../../actions/submitFitPlaneGaussCoords/submitFitPlaneGaussCoordsActions';

import {
  SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST,
  SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS,
  SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE,
} from '../../actions/submitFitPlaneRansacCoords/submitFitPlaneRansacCoordsActions';

import {
  SUBMIT_FIT_CYLINDER_COORDS_REQUEST,
  SUBMIT_FIT_CYLINDER_COORDS_SUCCESS,
  SUBMIT_FIT_CYLINDER_COORDS_FAILURE,
} from '../../actions/submitFitCylinderCoords/submitFitCylinderCoordsActions';

import {
  SUBMIT_FIT_POINT_COORDS_REQUEST,
  SUBMIT_FIT_POINT_COORDS_SUCCESS,
  SUBMIT_FIT_POINT_COORDS_FAILURE,
} from '../../actions/submitFitPointCoords/submitFitPointCoordsActions';

import {
  SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST,
  SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS,
  SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE,
} from '../../actions/submitFitLineL2Coords/submitFitLineL2CoordsActions';

import {
  SUBMIT_FIT_LINE_RANSAC_COORDS_REQUEST,
  SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS,
  SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE,
} from '../../actions/submitFitLineRansacCoords/submitFitLineRansacCoordsActions';

import {
  SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST,
  SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS,
  SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE,
} from '../../actions/submitFitCircleL2Coords/submitFitCircleL2CoordsActions';

import {
  SUBMIT_FIT_SPHERE_COORDS_REQUEST,
  SUBMIT_FIT_SPHERE_COORDS_SUCCESS,
  SUBMIT_FIT_SPHERE_COORDS_FAILURE,
} from '../../actions/submitFitSphereCoords/submitFitSphereCoordsActions';

import {
  SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST,
  SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS,
  SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE,
} from '../../actions/submitBundleAdjustmentCoords/submitBundleAdjustmentCoordsActions';

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
  it('should handle SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_FAILURE,
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
  it('should handle SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CYLINDER_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_CYLINDER_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CYLINDER_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_CYLINDER_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CYLINDER_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_CYLINDER_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_POINT_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_POINT_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_POINT_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_POINT_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_POINT_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_POINT_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_LINE_RANSAC_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_LINE_RANSAC_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_SPHERE_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_FIT_SPHERE_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_SPHERE_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_SPHERE_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_FIT_SPHERE_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_FIT_SPHERE_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST', () => {
    const state = {
      isCalculating: false,
    };
    const action = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST,
    };
    const expectedState = {
      isCalculating: true,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE', () => {
    const state = {
      isCalculating: true,
    };
    const action = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE,
    };
    const expectedState = {
      isCalculating: false,
    };
    const result = calculationStatusReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
