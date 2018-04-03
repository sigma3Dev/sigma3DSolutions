import {
  SUBMIT_3D_TRAFO_COORDS_REQUEST,
  SUBMIT_3D_TRAFO_COORDS_SUCCESS,
  SUBMIT_3D_TRAFO_COORDS_FAILURE,
} from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';

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
    default:
      return state;
  }
}

export default calculationStatus;
