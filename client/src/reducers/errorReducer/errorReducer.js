import { 
  REMOVE_ERROR,
} from '../../actions/errorHandling/errorHandlingActions';
import {
  SUBMIT_COORDS_FAILURE,
} from '../../actions/submitCoords/submitCoordsActions';
import {
  SUBMIT_PARAM_INVERSION_COORDS_FAILURE,
} from '../../actions/paramInversionCoords/paramInversionCoordsActions';

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
        error: null
      }
    case SUBMIT_COORDS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case SUBMIT_PARAM_INVERSION_COORDS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default errorHandling;