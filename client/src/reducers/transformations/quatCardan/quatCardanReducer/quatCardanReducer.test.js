import {
  SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS,
  SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS,
  CHANGE_QUAT_CARDAN_INPUT_FIELD,
} from '../../../../actions/quatCardanCoords/quatCardanCoordsActions';

import quatCardanReducer from './quatCardanReducer';

describe('quatCardanReducer', () => {
  it('should handle SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS', () => {
    const state = {
      cardan: {
        Ry: '0.00000',
        Rx: '0.00000',
        Rz: '0.00000',
      },
    };
    const action = {
      type: SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            rx: 1.5,
            ry: 2.15,
            rz: 0.5,
          },
        },
      },
    };
    const expectedState = {
      cardan: {
        Rx: '1.50000',
        Ry: '2.15000',
        Rz: '0.50000',
      },
    };
    const result = quatCardanReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS', () => {
    const state = {
      quat: {
        Q0: '0.00000',
        Q1: '0.00000',
        Q2: '0.00000',
        Q3: '0.00000',
      },
    };
    const action = {
      type: SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            q0: 1.5,
            q1: 2.15,
            q2: 0.5,
            q3: 0.85,
          },
        },
      },
    };
    const expectedState = {
      quat: {
        Q0: '1.50000',
        Q1: '2.15000',
        Q2: '0.50000',
        Q3: '0.85000',
      },
    };
    const result = quatCardanReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CHANGE_QUAT_CARDAN_INPUT_FIELD', () => {
    const state = {
      quat: {
        Q0: '0.00000',
        Q1: '0.00000',
        Q2: '0.00000',
        Q3: '0.00000',
      },
    };
    const action = {
      type: CHANGE_QUAT_CARDAN_INPUT_FIELD,
      name: 'Q0',
      val: '1',
    };
    const expectedState = {
      quat: {
        Q0: '1',
        Q1: '0.00000',
        Q2: '0.00000',
        Q3: '0.00000',
      },
    };
    const result = quatCardanReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
