import { REMOVE_ERROR } from '../../actions/errorHandling/errorHandlingActions';
import { SUBMIT_3D_TRAFO_COORDS_FAILURE } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE } from '../../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';
import { SUBMIT_PARAM_INVERSION_COORDS_FAILURE } from '../../actions/paramInversionCoords/paramInversionCoordsActions';

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
    default:
      return state;
  }
}

export default errorHandling;
