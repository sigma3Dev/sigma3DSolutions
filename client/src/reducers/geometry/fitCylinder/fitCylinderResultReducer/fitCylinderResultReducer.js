import { SUBMIT_FIT_CYLINDER_COORDS_SUCCESS } from '../../../../actions/submitFitCylinderCoords/submitFitCylinderCoordsActions';

const initialResultData = {
  x: 0,
  y: 0,
  z: 0,
  i: 0,
  j: 0,
  k: 0,
  radius: 0,
  stdev: 0,
  fittingErrors: [],
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function fitCylinderResult(state = initialResultData, action) {
  switch (action.type) {
    case SUBMIT_FIT_CYLINDER_COORDS_SUCCESS:
      return {
        ...state,
        x: action.response.result.x,
        y: action.response.result.y,
        z: action.response.result.z,
        i: action.response.result.i,
        j: action.response.result.j,
        k: action.response.result.k,
        radius: action.response.result.radius,
        stdev: action.response.result.stdev,
        fittingErrors: action.response.result.fittingErrors,
      };
    default:
      return state;
  }
}

export default fitCylinderResult;
