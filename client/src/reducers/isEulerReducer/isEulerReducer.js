import {
  SWITCH_ANGLE_TYPE
} from '../../actions/switchAngleType/switchAngleTypeActions';

const initialEulerStateData = {
  isEuler: false
}

function eulerStatus(state = initialEulerStateData, action) {
  switch(action.type) {
    case SWITCH_ANGLE_TYPE:
      return {
        ...state,
        isEuler: !state.isEuler
      }
    default:
      return state;
  }
}

export default eulerStatus;