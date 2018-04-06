import { PUSH_FIT_PLANE_COORDS } from '../../actions/pushCoords/pushCoordsActions';
import { CLEAR_PLANE_INPUT } from '../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
};

function fitPlane(state = initialData, action) {
  switch (action.type) {
    case PUSH_FIT_PLANE_COORDS:
      return {
        ...state,
        points: action.coords,
      };
    case CLEAR_PLANE_INPUT:
      return {
        ...state,
        points: [],
      };
    default:
      return state;
  }
}

export default fitPlane;