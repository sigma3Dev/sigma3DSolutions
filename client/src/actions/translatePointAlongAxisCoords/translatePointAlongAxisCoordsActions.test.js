import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';

import {
  submitTranslatePointAlongAxisCoords,
  SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST,
  submitTranslatePointAlongAxisCoordsRequest,
  SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS,
  submitTranslatePointAlongAxisCoordsSuccess,
} from './translatePointAlongAxisCoordsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('submitTranslatePointAlongAxisCoordsActions', () => {
  it('should create a SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST action', () => {
    const expected = {
      type: SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST,
    };
    const result = submitTranslatePointAlongAxisCoordsRequest();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS action', () => {
    const response = {
      data: {
        result: {
          x: 1380.4859742435729,
          y: 9336.536415479428,
          z: -3796.3960642844177,
        },
      },
    };
    const expected = {
      type: SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS,
      response,
    };
    const result = submitTranslatePointAlongAxisCoordsSuccess(response);
    expect(result.type).toEqual(expected.type);
    expect(result.response).toEqual(expected.response);
    expect(result.receivedAt).toBeDefined();
  });
  it('should dispatch a SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST and a SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS action', () => {
    const store = mockStore({});
    const expResponse = {
      result: {
        x: 1380.4859742435729,
        y: 9336.536415479428,
        z: -3796.3960642844177,
      },
    };
    const mock = new MockAdapter(axios);
    mock.onPost('/translate-point-along-axis').reply(200, expResponse);
    return store.dispatch(submitTranslatePointAlongAxisCoords()).then(() => {
      // return of async actions
      expect(store.getActions().length).toEqual(2);
      expect(store.getActions()[0].type).toEqual(SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST);
      expect(store.getActions()[1].type).toEqual(SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS);
    });
  });
});
