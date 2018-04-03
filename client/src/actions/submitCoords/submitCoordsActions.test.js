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
  calculateTrafoDifference,
  CALCULATE_TRAFO_DIFFERENCE_REQUEST,
  calculateTrafoDifferenceRequest,
  CALCULATE_TRAFO_DIFFERENCE_SUCCESS,
  calculateTrafoDifferenceSuccess,
  CALCULATE_TRAFO_DIFFERENCE_FAILURE,
  calculateTrafoDifferenceFailure,
} from './submitCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitCoordsActions', () => {
  it('should create a CHECKBOX_UPDATE action', () => {
    const id = 'x0';
    const expected = {
      type: CHECKBOX_UPDATE,
      id,
    };
    const result = checkboxUpdate(id);
    expect(result.type).toEqual(expected.type);
    expect(result.id).toEqual(expected.id);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_COORDS_REQUEST,
    };
    const result = submitCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          q0: -0.9950785875879063,
          q1: -0.004830151859800749,
          q2: -0.0006079507786298357,
          q3: 0.09896921012577276,
          tx: 1380.4859742435729,
          ty: 9336.536415479428,
          tz: -3796.3960642844177,
        },
      },
    };
    const expected = {
      type: SUBMIT_COORDS_SUCCESS,
      response,
    };
    const result = submitCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_COORDS_FAILURE action', () => {
    const error = 'Error while trying to fit.';
    const expected = {
      type: SUBMIT_COORDS_FAILURE,
      error,
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
        tz: -3796.3960642844177,
      },
    };
    const coords = {
      startSystemPoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
        },
      ],
      targetSystemPoints: [
        {
          x: 1.5,
          y: 2.5,
          z: 3.5,
        },
        {
          x: 4.5,
          y: 5.5,
          z: 6.5,
        },
      ],
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo').reply(200, expResponse);
    return store.dispatch(submitCoords(coords)).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_COORDS_SUCCESS);
    });
  });
  it('should dispatch a SUBMIT_COORDS_REQUEST and a SUBMIT_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: 'Error while trying to fit.',
        },
      },
    };
    const coords = {
      startSystemPoints: [
        {
          x: 1.0,
          y: 2.0,
          z: 3.0,
        },
        {
          x: 4.0,
          y: 5.0,
          z: 6.0,
        },
      ],
      targetSystemPoints: [
        {
          x: 1.5,
          y: 2.5,
          z: 3.5,
        },
        {
          x: 4.5,
          y: 5.5,
          z: 6.5,
        },
      ],
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo').reply(500, error);
    return store.dispatch(submitCoords(coords)).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_COORDS_FAILURE);
    });
  });
  it('should create a CALCULATE_TRAFO_DIFFERENCE_REQUEST action', () => {
    const expected = {
      type: CALCULATE_TRAFO_DIFFERENCE_REQUEST,
    };
    const result = calculateTrafoDifferenceRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CALCULATE_TRAFO_DIFFERENCE_SUCCESS action', () => {
    const response = {
      data: [
        {
          vx: 0.14,
          vy: 0.77,
          vz: 0.2,
          v: 1.09,
        },
      ],
    };
    const expected = {
      type: CALCULATE_TRAFO_DIFFERENCE_SUCCESS,
      response,
    };
    const result = calculateTrafoDifferenceSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CALCULATE_TRAFO_DIFFERENCE_FAILURE action', () => {
    const error = 'Error while trying to fit.';
    const expected = {
      type: CALCULATE_TRAFO_DIFFERENCE_FAILURE,
      error,
    };
    const result = calculateTrafoDifferenceFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a CALCULATE_TRAFO_DIFFERENCE_REQUEST and a CALCULATE_TRAFO_DIFFERENCE_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = [
      {
        vx: 0.06,
        vy: 0.13,
        vz: 0.44,
        v: 0.35,
      },
      {
        vx: 0.81,
        vy: 0.26,
        vz: 0.11,
        v: 0.59,
      },
    ];
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo-difference').reply(200, expResponse);
    return store.dispatch(calculateTrafoDifference()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(CALCULATE_TRAFO_DIFFERENCE_REQUEST);
      expect(store.getActions()[1].type).toEqual(CALCULATE_TRAFO_DIFFERENCE_SUCCESS);
    });
  });
  it('should dispatch a CALCULATE_TRAFO_DIFFERENCE_REQUEST and a CALCULATE_TRAFO_DIFFERENCE_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: 'Error while trying to fit.',
        },
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/calculate-trafo-difference').reply(500, error);
    return store.dispatch(calculateTrafoDifference()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(CALCULATE_TRAFO_DIFFERENCE_REQUEST);
      expect(store.getActions()[1].type).toEqual(CALCULATE_TRAFO_DIFFERENCE_FAILURE);
    });
  });
});
