import { REMOVE_ERROR } from '../../actions/errorHandling/errorHandlingActions';
import { SUBMIT_COORDS_FAILURE } from '../../actions/submitCoords/submitCoordsActions';
import errorReducer from './errorReducer';

describe('errorReducer', () => {
  it('should handle REMOVE_ERROR', () => {
    const state = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const action = {
      type: REMOVE_ERROR,
    };
    const expectedState = {
      error: null,
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle SUBMIT_COORDS_FAILURE', () => {
    const state = {
      error: {
        error: null,
      },
    };
    const action = {
      type: SUBMIT_COORDS_FAILURE,
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const expectedState = {
      error: {
        error: 'Error while trying to fit.',
      },
    };
    const result = errorReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
