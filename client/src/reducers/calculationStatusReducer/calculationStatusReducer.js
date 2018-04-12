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

/*  true when a request has been sent, but no response or error has returned yet */
const initialCalculationStateData = {
  isCalculating: false,
};

/**
 * Checks whether the a submitThreeDTrafoCoords request is currently being processed
 * @param {Object} state - current calculation state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function calculationStatus(state = initialCalculationStateData, action) {
  switch (action.type) {
    case SUBMIT_3D_TRAFO_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_3D_TRAFO_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_3D_TRAFO_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_APPLY_TRAFO_VALUES_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_APPLY_TRAFO_VALUES_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_APPLY_TRAFO_VALUES_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_CYLINDER_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_CYLINDER_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_CYLINDER_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_POINT_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_POINT_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_POINT_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_LINE_RANSAC_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_LINE_RANSAC_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_LINE_RANSAC_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      };
    case SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      };
    case SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      };
    default:
      return state;
  }
}

export default calculationStatus;
