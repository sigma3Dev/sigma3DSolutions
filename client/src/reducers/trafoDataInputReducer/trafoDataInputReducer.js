import {
  PUSH_START_SYSTEM_COORDINATES, 
  PUSH_TARGET_SYSTEM_COORDINATES, 
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';

/**
 * Holds the initial transformation data input.
 */
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
    default:
      return state;
  }
}

export default transformationDataInput;