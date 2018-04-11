import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitFitLineL2Coords,
  SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST,
  submitFitLineL2CoordsRequest,
  SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS,
  submitFitLineL2CoordsSuccess,
  SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE,
  submitFitLineL2CoordsFailure,
} from './submitFitLineL2CoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitFitLineL2CoordsActions', () => {
  it('should create a SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST,
    };
    const result = submitFitLineL2CoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          x: 11.833,
          y: 8.633,
          z: 11.6,
          i: 0.0,
          j: 0.0,
          k: 1.0,
          stdev: 0.0,
        },
      },
    };
    const expected = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS,
      response,
    };
    const result = submitFitLineL2CoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE action', () => {
    const error = 'Error while trying to fit.';
    const expected = {
      type: SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE,
      error,
    };
    const result = submitFitLineL2CoordsFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST and a SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        x: 11.833,
        y: 8.633,
        z: 11.6,
        i: 0.0,
        j: 0.0,
        k: 1.0,
        stdev: 0.0,
      },
    };
    const coords = [
      {
        x: 12.5,
        y: 23.7,
        z: 11.6,
      },
      {
        x: 14.5,
        y: 6.7,
        z: 11.6,
      },
      {
        x: 8.5,
        y: -4.5,
        z: 11.6,
      },
    ];
    const mock = new MockAdapter(axios);
    mock.onPost('/fit-line-l-two').reply(200, expResponse);
    return store.dispatch(submitFitLineL2Coords(coords)).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_FIT_LINE_L_TWO_COORDS_SUCCESS);
    });
  });
  it('should dispatch a SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST and a SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: 'Error while trying to fit.',
        },
      },
    };
    const coords = [
      {
        x: 12.5,
        y: 23.7,
        z: 11.6,
      },
      {
        x: 14.5,
        y: 6.7,
        z: 11.6,
      },
      {
        x: 8.5,
        y: -4.5,
        z: 11.6,
      },
    ];
    const mock = new MockAdapter(axios);
    mock.onPost('/fit-line-l-two').reply(500, error);
    return store.dispatch(submitFitLineL2Coords(coords)).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_FIT_LINE_L_TWO_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_FIT_LINE_L_TWO_COORDS_FAILURE);
    });
  });
});
