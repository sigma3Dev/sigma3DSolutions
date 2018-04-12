export const SUBMIT_FIT_CIRCLE_L_TWO_COORDS = 'SUBMIT_FIT_CIRCLE_L_TWO_COORDS';
export const SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST = 'SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST';
export const SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS = 'SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS';
export const SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE = 'SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitFitCircleL2Coords is requested */
export const submitFitCircleL2CoordsRequest = () => ({
  type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitFitCircleL2CoordsSuccess = response => ({
  type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitFitCircleL2CoordsFailure = error => ({
  type: SUBMIT_FIT_CIRCLE_L_TWO_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitFitCircleL2Coords = coords => (dispatch) => {
  dispatch(submitFitCircleL2CoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitFitCircleL2CoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/fit-circle-l-two', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response, 'data')) {
        dispatch(submitFitCircleL2CoordsSuccess(response.data));
      } else {
        dispatch(submitFitCircleL2CoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitFitCircleL2CoordsFailure(error.message));
    });
};
