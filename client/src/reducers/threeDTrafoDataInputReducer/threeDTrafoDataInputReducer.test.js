import { THREE_D_TRAFO_CHECKBOX_UPDATE } from '../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import {
  PUSH_3D_TRAFO_START_SYSTEM_COORDS,
  PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';
import {
  CLEAR_THREE_D_TRAFO_6W_START_INPUT,
  CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
} from '../../actions/clearInput/clearInputActions';
import threeDTrafoDataInputReducer from './threeDTrafoDataInputReducer';

describe('threeDTrafoDataInputReducer', () => {
  it('should handle THREE_D_TRAFO_CHECKBOX_UPDATE', () => {
    const state = {
      targetSystemPoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
          useX: true,
          useY: true,
          useZ: false,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
          useX: false,
          useY: true,
          useZ: false,
        },
      ],
    };
    const action = {
      type: THREE_D_TRAFO_CHECKBOX_UPDATE,
      id: 'x0',
    };
    const expectedState = {
      targetSystemPoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
          useX: false,
          useY: true,
          useZ: false,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
          useX: false,
          useY: true,
          useZ: false,
        },
      ],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle PUSH_3D_TRAFO_START_SYSTEM_COORDS', () => {
    const state = {
      startSystemPoints: [],
    };
    const action = {
      type: PUSH_3D_TRAFO_START_SYSTEM_COORDS,
      coords: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
      ],
    };
    const expectedState = {
      startSystemPoints: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
      ],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS', () => {
    const state = {
      targetSystemPoints: [],
    };
    const action = {
      type: PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
      coords: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
      ],
    };
    const expectedState = {
      targetSystemPoints: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
      ],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_THREE_D_TRAFO_6W_START_INPUT', () => {
    const state = {
      startSystemPoints: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
      ],
    };
    const action = {
      type: CLEAR_THREE_D_TRAFO_6W_START_INPUT,
    };
    const expectedState = {
      startSystemPoints: [],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT', () => {
    const state = {
      targetSystemPoints: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
      ],
    };
    const action = {
      type: CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
    };
    const expectedState = {
      targetSystemPoints: [],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
