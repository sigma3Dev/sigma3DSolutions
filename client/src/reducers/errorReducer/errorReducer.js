import { REMOVE_ERROR } from '../../actions/errorHandling/errorHandlingActions';
import { SUBMIT_3D_TRAFO_COORDS_FAILURE } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE } from '../../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';
import { SUBMIT_PARAM_INVERSION_COORDS_FAILURE } from '../../actions/paramInversionCoords/paramInversionCoordsActions';
import { SUBMIT_APPLY_TRAFO_VALUES_FAILURE } from '../../actions/submitApplyTransformationValues/submitApplyTransformationValuesActions';
import { SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE } from '../../actions/quatCardanCoords/quatCardanCoordsActions';
import { SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE } from '../../actions/submitFitPlaneGaussCoords/submitFitPlaneGaussCoordsActions';
import { SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE } from '../../actions/submitFitPlaneRansacCoords/submitFitPlaneRansacCoordsActions';
import { SUBMIT_FIT_CYLINDER_COORDS_FAILURE } from '../../actions/submitFitCylinderCoords/submitFitCylinderCoordsActions';
import { SUBMIT_FIT_POINT_COORDS_FAILURE } from '../../actions/submitFitPointCoords/submitFitPointCoordsActions';
import { SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE } from '../../actions/submitFitLineL2Coords/submitFitLineL2CoordsActions';
import { SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE } from '../../actions/submitFitLineRansacCoords/submitFitLineRansacCoordsActions';
import { SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE } from '../../actions/submitFitCircleL2Coords/submitFitCircleL2CoordsActions';
import { SUBMIT_FIT_SPHERE_COORDS_FAILURE } from '../../actions/submitFitSphereCoords/submitFitSphereCoordsActions';

const initialErrorState = { error: null };

/**
 * Handles errors
 * @param {Object} state - current error state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated state
 */
function errorHandling(state = initialErrorState, action) {
  switch (action.type) {
    case REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };
    case SUBMIT_3D_TRAFO_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_PARAM_INVERSION_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_APPLY_TRAFO_VALUES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_CYLINDER_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_POINT_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SUBMIT_FIT_SPHERE_COORDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default errorHandling;
