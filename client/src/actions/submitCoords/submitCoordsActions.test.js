import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  CHECKBOX_UPDATE,
  checkboxUpdate,
  submitCoords,
  SUBMIT_COORDS_REQUEST,
  submitCoordsRequest,
  SUBMIT_COORDS_SUCCESS,
  submitCoordsSuccess,
  SUBMIT_COORDS_FAILURE,
  submitCoordsFailure,
  calculateDifference,
  CALCULATE_DIFFERENCE_REQUEST,
  calculateDifferenceRequest,
  CALCULATE_DIFFERENCE_SUCCESS,
  calculateDifferenceSuccess,
  CALCULATE_DIFFERENCE_FAILURE,
  calculateDifferenceFailure,
} from './submitCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitCoordsActions', () => {
  it('should create a CHECKBOX_UPDATE action', () => {
    const id = 'x0';
    const expected = {
      type: CHECKBOX_UPDATE,
      id: id
    };
    const result = checkboxUpdate(id);
    expect(result.type).toEqual(expected.type);
    expect(result.id).toEqual(expected.id);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_COORDS_REQUEST
    };
    const result = submitCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          q0:-0.9950785875879063,
          q1:-0.004830151859800749,
          q2:-0.0006079507786298357,
          q3:0.09896921012577276,
          tx:1380.4859742435729,
          ty:9336.536415479428,
          tz:-3796.3960642844177
        }
      }
    };
    const expected = {
      type: SUBMIT_COORDS_SUCCESS,
      response: response
    };
    const result = submitCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_COORDS_FAILURE action', () => {
    const error = "Error while trying to fit.";
    const expected = {
      type: SUBMIT_COORDS_FAILURE,
      error: error
    };
    const result = submitCoordsFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_COORDS_REQUEST and a SUBMIT_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        q0: -0.9950785875879063,
        q1: -0.004830151859800749,
        q2: -0.0006079507786298357,
        q3: 0.09896921012577276,
        tx: 1380.4859742435729,
        ty: 9336.536415479428,
        tz: -3796.3960642844177
      }
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo').reply(200, expResponse );
    return store.dispatch(submitCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_COORDS_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_COORDS_SUCCESS
      );
    });
  });
  it('should dispatch a SUBMIT_COORDS_REQUEST and a SUBMIT_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: "Error while trying to fit."
        }
      }
    }
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo').reply(500, error );
    return store.dispatch(submitCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        SUBMIT_COORDS_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        SUBMIT_COORDS_FAILURE
      );
    });
  });
  it('should create a CALCULATE_DIFFERENCE_REQUEST action', () => {
    const expected = {
      type: CALCULATE_DIFFERENCE_REQUEST
    };
    const result = calculateDifferenceRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CALCULATE_DIFFERENCE_SUCCESS action', () => {
    const response = {
      data: [
        {
          vx: 0.14,
          vy: 0.77,
          vz: 0.2,
          v: 1.09,
        }
      ]
    };
    const expected = {
      type: CALCULATE_DIFFERENCE_SUCCESS,
      response: response
    };
    const result = calculateDifferenceSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CALCULATE_DIFFERENCE_FAILURE action', () => {
    const error = "Error while trying to fit.";
    const expected = {
      type: CALCULATE_DIFFERENCE_FAILURE,
      error: error
    };
    const result = calculateDifferenceFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a CALCULATE_DIFFERENCE_REQUEST and a CALCULATE_DIFFERENCE_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = [
      {
        vx: 0.06,
        vy: 0.13,
        vz: 0.44,
        v: 0.35
      }, {
        vx: 0.81,
        vy: 0.26,
        vz: 0.11,
        v: 0.59
      }
    ]; 
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo-difference').reply(200, expResponse);
    return store.dispatch(calculateDifference()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        CALCULATE_DIFFERENCE_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        CALCULATE_DIFFERENCE_SUCCESS
      );
    });
  });
  it('should dispatch a CALCULATE_DIFFERENCE_REQUEST and a CALCULATE_DIFFERENCE_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: "Error while trying to fit."
        }
      }
    }
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo-difference').reply(500, error );
    return store.dispatch(calculateDifference()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(
        CALCULATE_DIFFERENCE_REQUEST
      );
      expect(store.getActions()[1].type).toEqual(
        CALCULATE_DIFFERENCE_FAILURE
      );
    });
  });
});