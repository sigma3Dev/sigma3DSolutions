import { SUBMIT_FIT_POINT_COORDS_SUCCESS } from '../../../../actions/submitFitPointCoords/submitFitPointCoordsActions';

/** holds the initial transform data input */
const initialData = {
  x: 0,
  y: 0,
  z: 0,
  stdev: 0,
  fittingErrors: [],
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function fitPoint(state = initialData, action) {
  switch (action.type) {
    case SUBMIT_FIT_POINT_COORDS_SUCCESS:
      return {
        ...state,
        x: action.response.result.x,
        y: action.response.result.y,
        z: action.response.result.z,
        stdev: action.response.result.stdev,
        fittingErrors: action.response.result.fittingErrors,
      };
    default:
      return state;
  }
}

export default fitPoint;
