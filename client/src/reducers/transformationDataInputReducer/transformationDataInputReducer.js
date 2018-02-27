import {
  PARSE_COORDINATES_REQUEST, 
  PARSE_COORDINATES_SUCCESS, 
  PARSE_COORDINATES_FAILURE 
} from '../../actions/parseCoordinates/parseCoordinatesActions';

/**
 * Holds the initial transformation data input.
 */
const initialInfo = {
  startSystemPoints: [],
  targetSystemPoints: [],
  isFetchingData: false,
};

function transformationDataInput(state = {parseCoordinatesResponse: null}, action) {
  switch (action.type) {
    case PARSE_COORDINATES_REQUEST:
      return {
        ...state,
        isFetchingData: true,
      }
    case PARSE_COORDINATES_SUCCESS: 
      return {
        ...state,
        startSystemPoints: action.response.startSystem,
        targetSystemPoints: action.response.targetSystem,
        isFetchingData: false,
      }
    case PARSE_COORDINATES_FAILURE: 
      return {
        ...state,
        isFetchingData: false,
      }
    default:
      return state;
  }
}

export default transformationDataInput;