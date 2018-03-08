import {
  CHECKBOX_UPDATE
} from '../../actions/submitCoords/submitCoordsActions';

import {
  PUSH_START_SYSTEM_COORDINATES, 
  PUSH_TARGET_SYSTEM_COORDINATES
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';

import {
  CLEAR_START_INPUT,
  CLEAR_TARGET_INPUT
} from '../../actions/clearInput/clearInputActions';

/* Holds the initial transformation data input. */
const initialTrafoData = {
  startSystemPoints: [],
  targetSystemPoints: [],
};

/**
 * Handles all kinds of data input
 * @param {Object} state - current transformation data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function transformationDataInput(state = initialTrafoData, action) {
  switch (action.type) {
    case PUSH_START_SYSTEM_COORDINATES:
    return {
      ...state,
      startSystemPoints: action.coords,
    }
    case PUSH_TARGET_SYSTEM_COORDINATES:
      return {
        ...state,
        targetSystemPoints: action.coords,
      }
    case CHECKBOX_UPDATE:
      const points = state.targetSystemPoints.map((targetSystemPoint, index) => {
        const point = {...targetSystemPoint}
        if (targetSystemPoint === state.targetSystemPoints[action.id[1]]) {
          if (action.id[0] === 'x') {
            point.useX = !targetSystemPoint.useX;
          } else if (action.id[0] === 'y') {
            point.useY = !targetSystemPoint.useY;
          } else {
            point.useZ = !targetSystemPoint.useZ;
          }
        };

        return point;
      });
      return {
        ...state,
        targetSystemPoints: points,
      }
    case CLEAR_START_INPUT:
      return {
        ...state,
        startSystemPoints: [],
      }
    case CLEAR_TARGET_INPUT:
      return {
        ...state,
        targetSystemPoints: [],
      }
    default:
      return state;
  }
}

export default transformationDataInput;