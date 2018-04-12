import { PUSH_FIT_SPHERE_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_SPHERE_INPUT } from '../../../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
};

function fitSphere(state = initialData, action) {
  switch (action.type) {
    case PUSH_FIT_SPHERE_COORDS:
      return {
        ...state,
        points: action.coords,
      };
    case CLEAR_SPHERE_INPUT:
      return {
        ...state,
        points: [],
      };
    default:
      return state;
  }
}

export default fitSphere;
