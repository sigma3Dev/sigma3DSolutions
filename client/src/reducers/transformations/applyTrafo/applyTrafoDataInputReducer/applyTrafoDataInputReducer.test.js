import { PUSH_APPLY_TRAFO_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_APPLY_TRAFO_INPUT } from '../../../../actions/clearInput/clearInputActions';
import { SUBMIT_3D_TRAFO_COORDS_SUCCESS } from '../../../../actions/submitThreeDTrafoCoords/submitThreeDTrafoCoordsActions';
import { CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD } from '../../../../actions/changeApplyTrafoParamInputField/changeApplyTrafoParamInputFieldActions';
import applyTrafoDataInputReducer from './applyTrafoDataInputReducer';

describe('applyTrafoDataInputReducer', () => {
  it('should handle PUSH_APPLY_TRAFO_COORDS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: PUSH_APPLY_TRAFO_COORDS,
      coords: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
        {
          x: 4,
          y: 5,
          z: 6,
        },
      ],
    };
    const expectedState = {
      points: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
        {
          x: 4,
          y: 5,
          z: 6,
        },
      ],
    };
    const result = applyTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_APPLY_TRAFO_INPUT', () => {
    const state = {
      points: [
        {
          x: 1,
          y: 2,
          z: 3,
        },
        {
          x: 4,
          y: 5,
          z: 6,
        },
      ],
    };
    const action = {
      type: CLEAR_APPLY_TRAFO_INPUT,
    };
    const expectedState = {
      points: [],
    };
    const result = applyTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_3D_TRAFO_COORDS_SUCCESS', () => {
    const state = {
      transformation: {
        tx: 0,
        ty: 0,
        tz: 0,
        q0: 0,
        q1: 0,
        q2: 0,
        q3: 0,
        m: 1,
      },
    };
    const action = {
      type: SUBMIT_3D_TRAFO_COORDS_SUCCESS,
      response: {
        data: {
          result: {
            tx: 10,
            ty: 10,
            tz: 10,
            q0: 1,
            q1: 0,
            q2: 0,
            q3: 0,
            m: 1,
          },
        },
      },
    };
    const expectedState = {
      transformation: {
        tx: 10,
        ty: 10,
        tz: 10,
        q0: 1,
        q1: 0,
        q2: 0,
        q3: 0,
        m: 1,
      },
    };
    const result = applyTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD', () => {
    const state = {
      transformation: {
        tx: 10,
        ty: 10,
        tz: 10,
        q0: 1,
        q1: 0,
        q2: 0,
        q3: 0,
        m: 1,
      },
    };
    const action = {
      type: CHANGE_APPLY_TRAFO_PARAM_INPUT_FIELD,
      name: 'tx',
      val: 20,
    };
    const expectedState = {
      transformation: {
        tx: 20,
        ty: 10,
        tz: 10,
        q0: 1,
        q1: 0,
        q2: 0,
        q3: 0,
        m: 1,
      },
    };
    const result = applyTrafoDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
