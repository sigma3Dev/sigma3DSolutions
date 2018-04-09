import { CALCULATE_3D_TRAFO_DIFFERENCE_SUCCESS } from '../../../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';

const initialResultData = {
  difference: [],
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function trafoResult(state = initialResultData, action) {
  switch (action.type) {
    case CALCULATE_3D_TRAFO_DIFFERENCE_SUCCESS:
      return {
        ...state,
        difference: action.response.data,
      };
    default:
      return state;
  }
}

export default trafoResult;
