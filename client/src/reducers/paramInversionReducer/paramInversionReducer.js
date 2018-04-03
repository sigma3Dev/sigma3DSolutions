import { SUBMIT_PARAM_INVERSION_COORDS_SUCCESS } from '../../actions/paramInversionCoords/paramInversionCoordsActions';

/* Holds the initial transformation data input. */
const initialParamInversionData = {
  tx: 0,
  ty: 0,
  tz: 0,
  q0: 0,
  q1: 0,
  q2: 0,
  q3: 0,
  m: 0,
};

/**
 * Handles all kinds of parameter inversion actions
 * @param {Object} state - current transformation data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function paramInversion(state = initialParamInversionData, action) {
  switch (action.type) {
    case SUBMIT_PARAM_INVERSION_COORDS_SUCCESS:
      return {
        ...state,
        tx: action.response.data.result.tx,
        ty: action.response.data.result.ty,
        tz: action.response.data.result.tz,
        q0: action.response.data.result.q0,
        q1: action.response.data.result.q1,
        q2: action.response.data.result.q2,
        q3: action.response.data.result.q3,
        m: action.response.data.result.m,
      };
    default:
      return state;
  }
}

export default paramInversion;
