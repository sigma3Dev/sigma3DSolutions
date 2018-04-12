import { SUBMIT_FIT_SPHERE_COORDS_SUCCESS } from '../../../../actions/submitFitSphereCoords/submitFitSphereCoordsActions';

const initialResultData = {
  x: 0,
  y: 0,
  z: 0,
  radius: 0,
  stdev: 0,
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function fitSphereResult(state = initialResultData, action) {
  switch (action.type) {
    case SUBMIT_FIT_SPHERE_COORDS_SUCCESS:
      return {
        ...state,
        x: action.response.result.x,
        y: action.response.result.y,
        z: action.response.result.z,
        radius: action.response.result.radius,
        stdev: action.response.result.stdev,
      };
    default:
      return state;
  }
}

export default fitSphereResult;
