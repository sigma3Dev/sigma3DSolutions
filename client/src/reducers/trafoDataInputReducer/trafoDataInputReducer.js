import {
  PUSH_START_SYSTEM_COORDINATES, 
  PUSH_TARGET_SYSTEM_COORDINATES, 
  CHECKBOX_UPDATE,
  SUBMIT_COORDS_SUCCESS,
  SUBMIT_COORDS_FAILURE,
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';

/* Holds the initial transformation data input. */
const initialTrafoData = {
  startSystemPoints: [],
  targetSystemPoints: [],
};

function transformationDataInput(state = initialTrafoData, action) {
  switch (action.type) {
    case PUSH_START_SYSTEM_COORDINATES:
    return {
      ...state,
      startSystemPoints: action.coords,
    }
    case PUSH_TARGET_SYSTEM_COORDINATES: 
      return {
        ...state,
        targetSystemPoints: action.coords,
      }
    case CHECKBOX_UPDATE:
      state.targetSystemPoints.map(targetSystemPoint => {
        if (targetSystemPoint.hasOwnProperty(action.id)) {
          targetSystemPoint[action.id] = !targetSystemPoint[action.id];
        };
        return targetSystemPoint;
      });

      return {
        ...state
      }
    case SUBMIT_COORDS_SUCCESS:
      return { ...state, response: action.response.json() };
    case SUBMIT_COORDS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default transformationDataInput;