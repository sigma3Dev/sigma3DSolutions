export const SUBMIT_FIT_SPHERE_COORDS = 'SUBMIT_FIT_SPHERE_COORDS';
export const SUBMIT_FIT_SPHERE_COORDS_REQUEST = 'SUBMIT_FIT_SPHERE_COORDS_REQUEST';
export const SUBMIT_FIT_SPHERE_COORDS_SUCCESS = 'SUBMIT_FIT_SPHERE_COORDS_SUCCESS';
export const SUBMIT_FIT_SPHERE_COORDS_FAILURE = 'SUBMIT_FIT_SPHERE_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitFitSphereCoords is requested */
export const submitFitSphereCoordsRequest = () => ({
  type: SUBMIT_FIT_SPHERE_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitFitSphereCoordsSuccess = response => ({
  type: SUBMIT_FIT_SPHERE_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitFitSphereCoordsFailure = error => ({
  type: SUBMIT_FIT_SPHERE_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitFitSphereCoords = coords => (dispatch) => {
  dispatch(submitFitSphereCoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitFitSphereCoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/fit-sphere', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response, 'data')) {
        dispatch(submitFitSphereCoordsSuccess(response.data));
      } else {
        dispatch(submitFitSphereCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitFitSphereCoordsFailure(error.message));
    });
};
