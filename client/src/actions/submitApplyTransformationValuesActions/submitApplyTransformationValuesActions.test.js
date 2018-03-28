import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitApplyTrafoValues,
  SUBMIT_APPLY_TRAFO_VALUES_REQUEST,
  submitApplyTrafoValuesRequest,
  SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
  submitApplyTrafoValuesSuccess,
  SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
  submitApplyTrafoValuesFailure,
} from './submitApplyTransformationValuesActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitApplyTrafoValuesActions', () => {
  it('should create a SUBMIT_APPLY_TRAFO_VALUES_REQUEST action', () => {
    const expected = {
      type: SUBMIT_APPLY_TRAFO_VALUES_REQUEST
    };
    const result = submitApplyTrafoValuesRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_APPLY_TRAFO_VALUES_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          x: 22.5,
          y: 33.7,
          z: 21.6
        }
      }
    };
    const expected = {
      type: SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
      response: response
    };
    const result = submitApplyTrafoValuesSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_APPLY_TRAFO_VALUES_FAILURE action', () => {
    const error = "Error while trying to fit.";
    const expected = {
      type: SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
      error: error
    };
    const result = submitApplyTrafoValuesFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_APPLY_TRAFO_VALUES_REQUEST and a SUBMIT_APPLY_TRAFO_VALUES_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        x: 1,
        y: 2,
        z: 3
      }
    };
    const values = {
      point: {
        x: 12.5,
        y: 23.7,
        z: 11.6
      },
      transformation: {
        tx: 10.0,
        ty: 10.0,
        tz: 10.0,
        q0: 1.000000,
        q1: 0.000000,
        q2: 0.000000,
        q3: 0.000000,
        m: 1.0
      }
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/apply-trafo').reply(200, expResponse );
    return store.dispatch(submitApplyTrafoValues(values)).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_APPLY_TRAFO_VALUES_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_APPLY_TRAFO_VALUES_SUCCESS
      );
    });
  });
  it('should dispatch a SUBMIT_APPLY_TRAFO_VALUES_REQUEST and a SUBMIT_APPLY_TRAFO_VALUES_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: "Error while trying to fit."
        }
      }
    };
    const values = {
      point: {
        x: 12.5,
        y: 23.7,
        z: 11.6
      },
      transformation: {
        tx: 10.0,
        ty: 10.0,
        tz: 10.0,
        q0: 1.000000,
        q1: 0.000000,
        q2: 0.000000,
        q3: 0.000000,
        m: 1.0
      }
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/apply-trafo').reply(500, error );
    return store.dispatch(submitApplyTrafoValues(values)).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_APPLY_TRAFO_VALUES_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_APPLY_TRAFO_VALUES_FAILURE
      );
    });
  });
});