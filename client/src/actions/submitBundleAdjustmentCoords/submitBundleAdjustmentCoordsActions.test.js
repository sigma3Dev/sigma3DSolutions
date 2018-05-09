import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitBundleAdjustmentCoords,
  SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST,
  submitBundleAdjustmentCoordsRequest,
  SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS,
  submitBundleAdjustmentCoordsSuccess,
  SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE,
  submitBundleAdjustmentCoordsFailure,
} from './submitBundleAdjustmentCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitBundleAdjustmentCoordsActions', () => {
  it('should create a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST,
    };
    const result = submitBundleAdjustmentCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          x: 0.0,
          y: 0.0,
          z: 0.0,
          i: 0.0,
          j: 0.0,
          k: 1.0,
          radius: 1.0,
          tschebyDistance: 0.0,
          stdev: 0.0,
        },
      },
    };
    const expected = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS,
      response,
    };
    const result = submitBundleAdjustmentCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE action', () => {
    const error = 'Error while trying to fit.';
    const expected = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE,
      error,
    };
    const result = submitBundleAdjustmentCoordsFailure(error);
    expect(result.type).toEqual(expected.type);
    expect(result.error).toEqual(expected.error);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST and a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        i: 0.0,
        j: 0.0,
        k: 1.0,
        radius: 1.0,
        tschebyDistance: 0.0,
        stdev: 0.0,
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/bundle-adjustment').reply(200, expResponse);
    return store.dispatch(submitBundleAdjustmentCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS);
    });
  });
  it('should dispatch a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST and a SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE action', () => {
    const store = mockStore({});
    const error = {
      data: {
        error: {
          message: 'Error while trying to fit.',
        },
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/bundle-adjustment').reply(500, error);
    return store.dispatch(submitBundleAdjustmentCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE);
    });
  });
});
