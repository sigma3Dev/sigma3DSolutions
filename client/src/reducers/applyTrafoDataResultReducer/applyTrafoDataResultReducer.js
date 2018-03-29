import { SUBMIT_APPLY_TRAFO_VALUES_SUCCESS } from '../../actions/submitApplyTransformationValuesActions/submitApplyTransformationValuesActions';

const initialResultData = {
  points: [],
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function applyTransformationResult(state = initialResultData, action) {
  switch (action.type) {
    case SUBMIT_APPLY_TRAFO_VALUES_SUCCESS:
      return {
        ...state,
        points: action.response,
      };
    default:
      return state;
  }
}

export default applyTransformationResult;
