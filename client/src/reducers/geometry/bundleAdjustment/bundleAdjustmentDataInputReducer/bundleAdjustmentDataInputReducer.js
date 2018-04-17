import { PUSH_BUNDLE_ADJUSTMENT_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CYLINDER_INPUT } from '../../../../actions/clearInput/clearInputActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
};

function bundleAdjustment(state = initialData, action) {
  switch (action.type) {
    case PUSH_BUNDLE_ADJUSTMENT_COORDS:
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

export default bundleAdjustment;
