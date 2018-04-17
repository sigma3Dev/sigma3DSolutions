import { SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS } from '../../../../actions/submitBundleAdjustmentCoords/submitBundleAdjustmentCoordsActions';

const initialResultData = {
  baseStationId: 0,
  transformationParameters: [],
  geometries: [],
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function bundleAdjustmentResult(state = initialResultData, action) {
  switch (action.type) {
    case SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS:
      return {
        ...state,
        baseStationId: action.response.result.baseStationId,
        transformationParameters: action.response.result.transformationParameters,
        geometries: action.response.result.geometries,
      };
    default:
      return state;
  }
}

export default bundleAdjustmentResult;
