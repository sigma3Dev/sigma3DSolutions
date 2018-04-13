import { PUSH_FIT_CHEBY_CIRCLE_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';

import { CLEAR_CHEBYSHEV_INPUT } from '../../../../actions/clearInput/clearInputActions';

/* Holds the initial FitCircleChebyshev data input. */
const initialFitCircleChebyshevData = {
  circlePoints: [],
};

/**
 * Handles all kinds of chebyshev circle fit data input
 * @param {Object} state - current FitCircleChebyshev data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function fitCircleChebyshevDataInput(state = initialFitCircleChebyshevData, action) {
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

export default fitCircleChebyshevDataInput;
