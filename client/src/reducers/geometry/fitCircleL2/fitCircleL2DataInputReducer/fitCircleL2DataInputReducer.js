import { PUSH_FIT_CIRCLE_L_TWO_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CIRCLE_L_TWO_INPUT } from '../../../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
};

function fitCircleL2(state = initialData, action) {
  switch (action.type) {
    case PUSH_FIT_CIRCLE_L_TWO_COORDS:
      return {
        ...state,
        points: action.coords,
      };
    case CLEAR_CIRCLE_L_TWO_INPUT:
      return {
        ...state,
        points: [],
      };
    default:
      return state;
  }
}

export default fitCircleL2;
