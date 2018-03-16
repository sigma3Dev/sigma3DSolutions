import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitParamInversionCoords,
  SUBMIT_PARAM_INVERSION_COORDS_REQUEST,
  submitParamInversionCoordsRequest,
  SUBMIT_PARAM_INVERSION_COORDS_SUCCESS,
  submitParamInversionCoordsSuccess,
  PUSH_PARAM_INVERSION_COORDS,
  pushParamInversionCoords,
} from './paramInversionCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitParamInversionCoordsActions', () => {
  it('should create a SUBMIT_PARAM_INVERSION_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_PARAM_INVERSION_COORDS_REQUEST
    };
    const result = submitParamInversionCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_PARAM_INVERSION_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          q0:-0.9950785875879063,
          q1:-0.004830151859800749,
          q2:-0.0006079507786298357,
          q3:0.09896921012577276,
          tx:1380.4859742435729,
          ty:9336.536415479428,
          tz:-3796.3960642844177,
          m:1.0
        }
      }
    };
    const expected = {
      type: SUBMIT_PARAM_INVERSION_COORDS_SUCCESS,
      response: response
    };
    const result = submitParamInversionCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_PARAM_INVERSION_COORDS_REQUEST and a SUBMIT_PARAM_INVERSION_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        q0: -0.9950785875879063,
        q1: -0.004830151859800749,
        q2: -0.0006079507786298357,
        q3: 0.09896921012577276,
        tx: 1380.4859742435729,
        ty: 9336.536415479428,
        tz: -3796.3960642844177,
        m: 1.0
      }
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/param-inversion').reply(200, expResponse );
    return store.dispatch(submitParamInversionCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_PARAM_INVERSION_COORDS_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_PARAM_INVERSION_COORDS_SUCCESS
      );
    });
  });
  it('should create a PUSH_START_SYSTEM_COORDINATES action', () => {
    const paramInversionPoints = {
      tx: 10,
      ty: 10,
      tz: 10,
      q0: 1,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 1,
    }
    const expected = {
      type: PUSH_PARAM_INVERSION_COORDS,
      coords: paramInversionPoints
    };
    const result = pushParamInversionCoords(paramInversionPoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
});