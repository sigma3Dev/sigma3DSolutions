export const SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS = 'SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS';
export const SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST =
  'SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST';
export const SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS =
  'SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS';
export const SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE =
  'SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitChebyshevCircleFitCoords is requested */
export const submitChebyshevCircleFitCoordsRequest = () => ({
  type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitChebyshevCircleFitCoordsSuccess = response => ({
  type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitChebyshevCircleFitCoordsFailure = error => ({
  type: SUBMIT_CHEBYSHEV_CIRCLE_FIT_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitChebyshevCircleFitCoords = () => (dispatch, getState) => {
  dispatch(submitChebyshevCircleFitCoordsRequest());
  const coords = getState();
  return axios
    .post('/calculate-chebyshev-circle-fit', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitChebyshevCircleFitCoordsSuccess(response));
      } else {
        dispatch(submitChebyshevCircleFitCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitChebyshevCircleFitCoordsFailure(error.message));
    });
};
