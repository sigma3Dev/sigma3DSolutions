import { PUSH_FIT_LINE_RANSAC_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_LINE_RANSAC_INPUT } from '../../../../actions/clearInput/clearInputActions';
import { UPDATE_FIT_LINE_RANSAC_TOLERANCE } from '../../../../actions/changeFitLineRansacInputField/changeFitLineRansacInputFieldActions';

/** holds the initial transform data input */
const initialData = {
  params: {
    points: [],
    tolerance: 0.2,
  },
};

function fitLineRansac(state = initialData, action) {
  switch (action.type) {
    case PUSH_FIT_LINE_RANSAC_COORDS:
      return {
        ...state,
        params: {
          ...state.params,
          points: action.coords,
        },
      };
    case CLEAR_LINE_RANSAC_INPUT:
      return {
        ...state,
        params: {
          points: [],
          tolerance: 0.2,
        },
      };
    case UPDATE_FIT_LINE_RANSAC_TOLERANCE:
      return {
        ...state,
        params: {
          ...state.params,
          tolerance: Number(action.newTolerance),
        },
      };
    default:
      return state;
  }
}

export default fitLineRansac;
