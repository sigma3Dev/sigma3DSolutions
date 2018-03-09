import { 
  REMOVE_ERROR,
} from '../../actions/errorHandling/errorHandlingActions';
import {
  SUBMIT_COORDS_FAILURE,
} from '../../actions/submitCoords/submitCoordsActions';

const initialErrorState = { error: null };

function errorHandling(state = initialErrorState, action) {
  switch (action.type) {
    case REMOVE_ERROR:
      return {
        ...state,
        error: null
      }
    case SUBMIT_COORDS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default errorHandling;