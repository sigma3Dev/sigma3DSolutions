import { SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS } from '../../../../actions/submitFitCircleChebyshevCoords/submitFitCircleChebyshevCoordsActions';

const initialResultData = {
  x: 0.0,
  y: 0.0,
  z: 0.0,
  i: 0.0,
  j: 0.0,
  k: 0.0,
  radius: 0.0,
  tschebyDistance: 0.0,
  stdev: 0.0,
};

/**
 * Handles responses from the backend
 * @param {Object} state - current result data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function fitCircleChebyshevResult(state = initialResultData, action) {
  switch (action.type) {
    case SUBMIT_FIT_CIRCLE_CHEBYSHEV_COORDS_SUCCESS:
      return {
        ...state,
        x: action.response.data.result.x,
        y: action.response.data.result.y,
        z: action.response.data.result.z,
        i: action.response.data.result.i,
        j: action.response.data.result.j,
        k: action.response.data.result.k,
        radius: action.response.data.result.radius,
        tschebyDistance: action.response.data.result.tschebyDistance,
        stdev: action.response.data.result.stdev,
      };
    default:
      return state;
  }
}

export default fitCircleChebyshevResult;
