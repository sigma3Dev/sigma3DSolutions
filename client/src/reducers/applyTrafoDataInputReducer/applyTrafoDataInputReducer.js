import {
  PUSH_COORDINATES,
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';

import {
  CLEAR_APPLY_TRAFO_INPUT,
} from '../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialTrafoData = {
  params: {},
  points: [],
}

//TODO: write tests
/**
 * Handles all kinds of apply trafo actions
 * @param {Object} state - current transformation data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function applyTrafo(state = initialTrafoData, action) {
  switch (action.type) {
    case PUSH_COORDINATES:
      return {
        ...state,
        points: action.coords
      }
    case CLEAR_APPLY_TRAFO_INPUT:
      return {
        ...state,
        points: []
      }
    default:
      return state;
  }
}

export default applyTrafo;