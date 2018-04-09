import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitQuatToCardanCoords,
  SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST,
  submitQuatToCardanCoordsRequest,
  SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS,
  submitQuatToCardanCoordsSuccess,
  SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE,
  submitQuatToCardanCoordsFailure,
  submitCardanToQuatCoords,
  SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST,
  submitCardanToQuatCoordsRequest,
  SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS,
  submitCardanToQuatCoordsSuccess,
  SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE,
  submitCardanToQuatCoordsFailure,
  CHANGE_QUAT_CARDAN_INPUT_FIELD,
  changeQuatCardanInputField,
} from './quatCardanCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('quatToCardan', () => {
  it('should create a SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST,
    };
    const result = submitQuatToCardanCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          rx: 13.48,
          ry: 93.36,
          rz: -37.96,
        },
      },
    };
    const expected = {
      type: SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS,
      response,
    };
    const result = submitQuatToCardanCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE action', () => {
    const error = 'Error while trying to fit.';
    const expected = {
      type: SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE,
      error,
    };
    const result = submitQuatToCardanCoordsFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST and a SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        rx: 13.48,
        ry: 93.36,
        rz: -37.96,
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/quat-to-cardan').reply(200, expResponse);
    return store.dispatch(submitQuatToCardanCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS);
    });
  });
  it('should dispatch a SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST and a SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: 'Error while trying to fit.',
        },
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/quat-to-cardan').reply(500, error);
    return store.dispatch(submitQuatToCardanCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE);
    });
  });
});

describe('quatCardanCoordsActions', () => {
  it('should create a SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST,
    };
    const result = submitCardanToQuatCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          rx: 13.48,
          ry: 93.36,
          rz: -37.96,
        },
      },
    };
    const expected = {
      type: SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS,
      response,
    };
    const result = submitCardanToQuatCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE action', () => {
    const error = 'Error while trying to fit.';
    const expected = {
      type: SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE,
      error,
    };
    const result = submitCardanToQuatCoordsFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST and a SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        rx: 13.48,
        ry: 93.36,
        rz: -37.96,
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/cardan-to-quat').reply(200, expResponse);
    return store.dispatch(submitCardanToQuatCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS);
    });
  });
  it('should dispatch a SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST and a SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: 'Error while trying to fit.',
        },
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/cardan-to-quat').reply(500, error);
    return store.dispatch(submitCardanToQuatCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE);
    });
  });
});

describe('changeQuatCardanInputField', () => {
  it('should dispatch a CHANGE_QUAT_CARDAN_INPUT_FIELD action', () => {
    const name = 'Q0';
    const val = '12';
    const expected = {
      type: CHANGE_QUAT_CARDAN_INPUT_FIELD,
      name,
      val,
    };
    const result = changeQuatCardanInputField(name, val);
    expect(result.type).toEqual(expected.type);
    expect(result.name).toEqual(expected.name);
    expect(result.val).toEqual(expected.val);
    expect(result.receivedAt).toBeDefined();
  });
});
