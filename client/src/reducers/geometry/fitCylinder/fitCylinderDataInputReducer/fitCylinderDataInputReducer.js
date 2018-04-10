import { PUSH_FIT_CYLINDER_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CYLINDER_INPUT } from '../../../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
};

function fitCylinder(state = initialData, action) {
  switch (action.type) {
    case PUSH_FIT_CYLINDER_COORDS:
      return {
        ...state,
        points: action.coords,
      };
    case CLEAR_CYLINDER_INPUT:
      return {
        ...state,
        points: [],
      };
    default:
      return state;
  }
}

export default fitCylinder;
