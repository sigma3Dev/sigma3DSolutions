import { PUSH_FIT_CHEBY_CIRCLE_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';

import { CLEAR_CHEBYSHEV_INPUT } from '../../../../actions/clearInput/clearInputActions';

/* Holds the initial ChebyshevCircleFit data input. */
const initialChebyshevCircleFitData = {
  circlePoints: [],
};

/**
 * Handles all kinds of chebyshev circle fit data input
 * @param {Object} state - current ChebyshevCircleFit data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function chebyshevCircleFitDataInput(state = initialChebyshevCircleFitData, action) {
  switch (action.type) {
    case PUSH_FIT_CHEBY_CIRCLE_COORDS:
      return {
        ...state,
        circlePoints: action.coords,
      };
    case CLEAR_CHEBYSHEV_INPUT:
      return {
        ...state,
        circlePoints: [],
      };
    default:
      return state;
  }
}

export default chebyshevCircleFitDataInput;
