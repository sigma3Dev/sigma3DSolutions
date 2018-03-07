import {
  SUBMIT_COORDS_SUCCESS,
  SUBMIT_COORDS_FAILURE,
} from '../../actions/submitCoords/submitCoordsActions';

const initialResultData = {
  tx: 0,
  ty: 0,
  tz: 0,
  q0: 0,
  q1: 0,
  q2: 0,
  q3: 0,
}

/* handles responses from the backend */
function trafoResult(state = initialResultData, action) {
  switch(action.type) {
    case SUBMIT_COORDS_SUCCESS:
      return {
        ...state,
        tx: action.response.data.result.tx,
        ty: action.response.data.result.ty,
        tz: action.response.data.result.tz,
        q0: action.response.data.result.q0,
        q1: action.response.data.result.q1,
        q2: action.response.data.result.q2,
        q3: action.response.data.result.q3,
      };
    case SUBMIT_COORDS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default trafoResult;