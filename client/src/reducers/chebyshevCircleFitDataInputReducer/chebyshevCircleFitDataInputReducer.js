import { PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES } from '../../actions/pushChebyshevCircleFitCoords/pushChebyshevCircleFitCoordsActions';

import { CLEAR_INPUT } from '../../actions/clearInput/clearInputActions';

/* Holds the initial ChebyshevCircleFit data input. */
const initialChebyshevCircleFitData = {
  circlePoints: [] 
};

/**
 * Handles all kinds of chebyshev circle fit data input
 * @param {Object} state - current ChebyshevCircleFit data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function chebyshevCircleFitDataInput(state = initialChebyshevCircleFitData, action) {
  switch (action.type) {
    case PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES:
    return {
      ...state,
      circlePoints: action.coords,
    }
    case CLEAR_INPUT:
      return {
        ...state,
        circlePoints: [],
      }
    default:
      return state;
  }
}

export default chebyshevCircleFitDataInput;