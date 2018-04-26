import { PUSH_BUNDLE_ADJUSTMENT_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_BUNDLE_INPUT } from '../../../../actions/clearInput/clearInputActions';
import { CHANGE_BUNDLE_BASE_STATION } from '../../../../actions/changeBundleBaseStation/changeBundleBaseStationActions';

/** holds the initial transform data input */
const initialData = {
  points: [],
  baseStation: 0,
};

function bundleAdjustment(state = initialData, action) {
  switch (action.type) {
    case PUSH_BUNDLE_ADJUSTMENT_COORDS:
      return {
        ...state,
        points: action.coords,
        baseStation: action.coords[0].stationId,
      };
    case CLEAR_BUNDLE_INPUT:
      return {
        ...state,
        points: [],
        baseStation: 0,
      };
    case CHANGE_BUNDLE_BASE_STATION:
      return {
        ...state,
        baseStation: action.station,
      };
    default:
      return state;
  }
}

export default bundleAdjustment;
