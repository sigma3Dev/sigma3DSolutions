import {
  PUSH_START_SYSTEM_COORDINATES, 
  PUSH_TARGET_SYSTEM_COORDINATES, 
  CHECKBOX_UPDATE,
  CLEAR_START_INPUT,
  CLEAR_TARGET_INPUT
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
      state.targetSystemPoints.map((targetSystemPoint, index) => {
        if (targetSystemPoint === state.targetSystemPoints[action.id[1]]) {
          if (action.id[0] === 'x') {
            targetSystemPoint.useX = !targetSystemPoint.useX;
          } else if (action.id[0] === 'y') {
            targetSystemPoint.useY = !targetSystemPoint.useY;
          } else {
            targetSystemPoint.useZ = !targetSystemPoint.useZ;
          }
        };
        return targetSystemPoint;
      });
      return {
        ...state
      }
    case CLEAR_START_INPUT:
      return {
        ...state,
        startSystemPoints: [],
      }
    case CLEAR_TARGET_INPUT:
      return {
        ...state,
        targetSystemPoints: [],
      }
    default:
      return state;
  }
}

export default transformationDataInput;