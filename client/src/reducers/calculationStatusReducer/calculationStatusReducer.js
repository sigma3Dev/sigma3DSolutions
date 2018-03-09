import {
  SUBMIT_COORDS_REQUEST,
  SUBMIT_COORDS_SUCCESS,
  SUBMIT_COORDS_FAILURE,
} from '../../actions/submitCoords/submitCoordsActions';

/*  true when a request has been sent, but no response or error has returned yet */
const initialCalculationStateData = {
  isCalculating: false,
}

/**
 * Checks whether the a submitCoords request is currently being processed
 * @param {Object} state - current calculation state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function calculationStatus(state = initialCalculationStateData, action) {
  switch(action.type) {
    case SUBMIT_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      }
    case SUBMIT_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      }
    case SUBMIT_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      }
    default:
      return state;
  }
}

export default calculationStatus;