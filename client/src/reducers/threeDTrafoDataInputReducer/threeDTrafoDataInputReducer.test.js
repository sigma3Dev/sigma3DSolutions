import { CHECKBOX_UPDATE } from '../../actions/submitCoords/submitCoordsActions';
import {
  PUSH_START_SYSTEM_COORDINATES,
  PUSH_TARGET_SYSTEM_COORDINATES,
} from '../../actions/pushTrafoCoords/pushTrafoCoordsActions';
import { CLEAR_START_INPUT, CLEAR_TARGET_INPUT } from '../../actions/clearInput/clearInputActions';
import threeDTrafoDataInputReducer from './threeDTrafoDataInputReducer';

describe('threeDTrafoDataInputReducer', () => {
  it('should handle CHECKBOX_UPDATE', () => {
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
      type: CHECKBOX_UPDATE,
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
  it('should handle PUSH_START_SYSTEM_COORDINATES', () => {
    const state = {
      startSystemPoints: [],
    };
    const action = {
      type: PUSH_START_SYSTEM_COORDINATES,
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
  it('should handle PUSH_TARGET_SYSTEM_COORDINATES', () => {
    const state = {
      targetSystemPoints: [],
    };
    const action = {
      type: PUSH_TARGET_SYSTEM_COORDINATES,
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
  it('should handle CLEAR_START_INPUT', () => {
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
      type: CLEAR_START_INPUT,
    };
    const expectedState = {
      startSystemPoints: [],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_TARGET_INPUT', () => {
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
      type: CLEAR_TARGET_INPUT,
    };
    const expectedState = {
      targetSystemPoints: [],
    };
    const result = threeDTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
