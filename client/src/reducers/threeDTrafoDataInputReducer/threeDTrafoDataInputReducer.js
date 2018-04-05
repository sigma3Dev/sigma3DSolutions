import { THREE_D_TRAFO_CHECKBOX_UPDATE } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';

import {
  PUSH_3D_TRAFO_START_SYSTEM_COORDS,
  PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
} from '../../actions/pushCoords/pushCoordsActions';

import {
  CLEAR_THREE_D_TRAFO_6W_START_INPUT,
  CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
} from '../../actions/clearInput/clearInputActions';

/* Holds the initial transformation data input. */
const initialTrafoData = {
  startSystemPoints: [],
  targetSystemPoints: [],
};

/**
 * Handles all kinds of 3D trafo data input
 * @param {Object} state - current transformation data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function transformationDataInput(state = initialTrafoData, action) {
  let point;
  let points;

  switch (action.type) {
    case PUSH_3D_TRAFO_START_SYSTEM_COORDS:
      return {
        ...state,
        startSystemPoints: action.coords,
      };
    case PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS:
      return {
        ...state,
        targetSystemPoints: action.coords,
      };
    case THREE_D_TRAFO_CHECKBOX_UPDATE:
      points = state.targetSystemPoints.map((targetSystemPoint) => {
        point = { ...targetSystemPoint };
        if (targetSystemPoint === state.targetSystemPoints[action.id[1]]) {
          if (action.id[0] === 'x') {
            point.useX = !targetSystemPoint.useX;
          } else if (action.id[0] === 'y') {
            point.useY = !targetSystemPoint.useY;
          } else {
            point.useZ = !targetSystemPoint.useZ;
          }
        }
        return point;
      });
      return {
        ...state,
        targetSystemPoints: points,
      };
    case CLEAR_THREE_D_TRAFO_6W_START_INPUT:
      return {
        ...state,
        startSystemPoints: [],
      };
    case CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT:
      return {
        ...state,
        targetSystemPoints: [],
      };
    default:
      return state;
  }
}

export default transformationDataInput;
