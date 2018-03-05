import {
  SUBMIT_COORDS_REQUEST,
  SUBMIT_COORDS_SUCCESS,
  SUBMIT_COORDS_FAILURE,
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';

const initialCalculationStateData = {
  isCalculating: false,
}

function calculationStatus(state = initialCalculationStateData, action) {
  switch(action.type) {
    case SUBMIT_COORDS_REQUEST:
      return {
        ...state,
        isCalculating: true,
      }
    case SUBMIT_COORDS_SUCCESS:
      return {
        ...state,
        isCalculating: false,
      }
    case SUBMIT_COORDS_FAILURE:
      return {
        ...state,
        isCalculating: false,
      }
    default:
      return state;
  }
}

export default calculationStatus;