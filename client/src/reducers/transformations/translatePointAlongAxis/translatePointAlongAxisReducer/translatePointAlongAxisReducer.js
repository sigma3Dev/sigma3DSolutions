import { SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS } from '../../../../actions/translatePointAlongAxisCoords/translatePointAlongAxisCoordsActions';

/* Holds the initial translation data input. */
const initialData = {
  x: 0,
  y: 0,
  z: 0,
};

/**
 * Handles all kinds of point translate actions
 * @param {Object} state - current data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function translatePointAlongAxis(state = initialData, action) {
  switch (action.type) {
    case SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS:
      return {
        ...state,
        x: action.response.data.result.x,
        y: action.response.data.result.y,
        z: action.response.data.result.z,
      };
    default:
      return state;
  }
}

export default translatePointAlongAxis;
