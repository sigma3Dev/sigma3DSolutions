import {
  CHECKBOX_UPDATE
} from '../../actions/submitCoords/submitCoordsActions';
import {
  PUSH_START_SYSTEM_COORDINATES, 
  PUSH_TARGET_SYSTEM_COORDINATES
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';
import {
  CLEAR_START_INPUT,
  CLEAR_TARGET_INPUT
} from '../../actions/clearInput/clearInputActions';
import trafoDataInputReducer from './trafoDataInputReducer';

describe('trafoDataInputReducer', () => {
  it('should handle CHECKBOX_UPDATE', () => {
    const state = {
      targetSystemPoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
          useX: true,
          useY: true,
          useZ: false
        }, {
          x: 4.0,
          y: 5.0,
          z: 6.0,
          useX: false,
          useY: true,
          useZ: false
        }
      ]
    };
    const action = {
      type: CHECKBOX_UPDATE,
      id: 'x0'
    };
    const expectedState = {
      targetSystemPoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
          useX: false,
          useY: true,
          useZ: false
        }, {
          x: 4.0,
          y: 5.0,
          z: 6.0,
          useX: false,
          useY: true,
          useZ: false
        }
      ]
    };
    const result = trafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});

