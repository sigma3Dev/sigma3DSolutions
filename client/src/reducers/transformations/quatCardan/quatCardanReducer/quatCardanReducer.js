import {
  SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS,
  SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS,
  CHANGE_QUAT_CARDAN_INPUT_FIELD,
} from '../../../../actions/quatCardanCoords/quatCardanCoordsActions';

/* Holds the initial data input. */
const initialQuatCardanData = {
  quat: {
    Q0: '0.00000',
    Q1: '0.00000',
    Q2: '0.00000',
    Q3: '0.00000',
  },
  cardan: {
    Rx: '0.00000',
    Ry: '0.00000',
    Rz: '0.00000',
  },
};

/**
 * Handles all kinds of quaternion to cardan actions
 * @param {Object} state - current transformation data state
 * @param {Object} action - action to be executed
 * @returns {Object} state - updated State
 */
function quatCardan(state = initialQuatCardanData, action) {
  switch (action.type) {
    case SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS:
      return {
        ...state,
        quat: {
          Q0: Number(action.response.data.result.q0).toFixed(5),
          Q1: Number(action.response.data.result.q1).toFixed(5),
          Q2: Number(action.response.data.result.q2).toFixed(5),
          Q3: Number(action.response.data.result.q3).toFixed(5),
        },
      };
    case SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS:
      return {
        ...state,
        cardan: {
          Rx: Number(action.response.data.result.rx).toFixed(5),
          Ry: Number(action.response.data.result.ry).toFixed(5),
          Rz: Number(action.response.data.result.rz).toFixed(5),
        },
      };
    case CHANGE_QUAT_CARDAN_INPUT_FIELD:
      if (action.name[0] === 'R') {
        return {
          ...state,
          cardan: {
            ...state.cardan,
            [action.name]: action.val,
          },
        };
      }
      return {
        ...state,
        quat: {
          ...state.quat,
          [action.name]: action.val,
        },
      };
    default:
      return state;
  }
}

export default quatCardan;
