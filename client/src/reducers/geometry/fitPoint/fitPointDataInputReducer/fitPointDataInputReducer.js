import { PUSH_FIT_POINT_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_POINT_INPUT } from '../../../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
};

function fitCylinder(state = initialData, action) {
  switch (action.type) {
    case PUSH_FIT_POINT_COORDS:
      return {
        ...state,
        points: action.coords,
      };
    case CLEAR_POINT_INPUT:
      return {
        ...state,
        points: [],
      };
    default:
      return state;
  }
}

export default fitCylinder;
