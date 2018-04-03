import { PUSH_COORDINATES } from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';
import { CLEAR_APPLY_TRAFO_INPUT } from '../../actions/clearInput/clearInputActions';
import { SUBMIT_3D_TRAFO_COORDS_SUCCESS } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD } from '../../actions/changeApplyTrafoParamInputField/changeApplyTrafoParamInputFieldActions';

/** holds the initial transform data input */
const initialTrafoData = {
  transformation: {},
  points: [],
};

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
        points: action.coords,
      };
    case CLEAR_APPLY_TRAFO_INPUT:
      return {
        ...state,
        points: [],
      };
    case SUBMIT_3D_TRAFO_COORDS_SUCCESS:
      return {
        ...state,
        transformation: action.response.data.result,
      };
    case CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD:
      return {
        ...state,
        transformation: {
          ...state.transformation,
          [action.name]: action.val,
        },
      };
    default:
      return state;
  }
}

export default applyTrafo;
