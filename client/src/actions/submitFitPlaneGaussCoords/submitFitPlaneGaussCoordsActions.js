export const SUBMIT_FIT_PLANE_GAUSS_COORDS = 'SUBMIT_FIT_PLANE_GAUSS_COORDS';
export const SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST = 'SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST';
export const SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS = 'SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS';
export const SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE = 'SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitFitPlaneGaussCoords is requested */
export const submitFitPlaneGaussCoordsRequest = () => ({
  type: SUBMIT_FIT_PLANE_GAUSS_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitFitPlaneGaussCoordsSuccess = response => ({
  type: SUBMIT_FIT_PLANE_GAUSS_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitFitPlaneGaussCoordsFailure = error => ({
  type: SUBMIT_FIT_PLANE_GAUSS_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitFitPlaneGaussCoords = coords => (dispatch) => {
  dispatch(submitFitPlaneGaussCoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitFitPlaneGaussCoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/fit-plane-gauss', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response, 'data')) {
        dispatch(submitFitPlaneGaussCoordsSuccess(response.data));
      } else {
        dispatch(submitFitPlaneGaussCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitFitPlaneGaussCoordsFailure(error.message));
    });
};
