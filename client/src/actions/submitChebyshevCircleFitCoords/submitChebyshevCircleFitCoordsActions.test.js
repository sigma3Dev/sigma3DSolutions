import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitChebyshevCircleFitCoords,
  SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST,
  submitChebyshevCircleFitCoordsRequest,
  SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_SUCCESS,
  submitChebyshevCircleFitCoordsSuccess,
  SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_FAILURE,
  submitChebyshevCircleFitCoordsFailure
} from './submitChebyshevCircleFitCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitChebyshevCircleFitCoordsActions', () => {
  it('should create a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST
    };
    const result = submitChebyshevCircleFitCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          x: 0.00,
          y: 0.00,
          z: 0.00,
          i: 0.00000,
          j: 0.00000,
          k: 1.00000,
          radius: 1.0,
          tschebyDistance: 0.0,
          stdev: 0.0
        }
      }
    };
    const expected = {
      type: SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_SUCCESS,
      response: response
    };
    const result = submitChebyshevCircleFitCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_FAILURE action', () => {
    const error = "Error while trying to fit.";
    const expected = {
      type: SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_FAILURE,
      error: error
    };
    const result = submitChebyshevCircleFitCoordsFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST and a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        x: 0.00,
        y: 0.00,
        z: 0.00,
        i: 0.00000,
        j: 0.00000,
        k: 1.00000,
        radius: 1.0,
        tschebyDistance: 0.0,
        stdev: 0.0
      }
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-chebyshev-circle-fit').reply(200, expResponse );
    return store.dispatch(submitChebyshevCircleFitCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_SUCCESS
      );
    });
  });
  it('should dispatch a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST and a SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: "Error while trying to fit."
        }
      }
    }
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-chebyshev-circle-fit').reply(500, error );
    return store.dispatch(submitChebyshevCircleFitCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_CHEBYSHEY_CIRCLE_FIT_COORDS_FAILURE
      );
    });
  });
});