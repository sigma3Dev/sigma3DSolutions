export const SUBMIT_FIT_CYLINDER_COORDS = 'SUBMIT_FIT_CYLINDER_COORDS';
export const SUBMIT_FIT_CYLINDER_COORDS_REQUEST = 'SUBMIT_FIT_CYLINDER_COORDS_REQUEST';
export const SUBMIT_FIT_CYLINDER_COORDS_SUCCESS = 'SUBMIT_FIT_CYLINDER_COORDS_SUCCESS';
export const SUBMIT_FIT_CYLINDER_COORDS_FAILURE = 'SUBMIT_FIT_CYLINDER_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitFitCylinderCoords is requested */
export const submitFitCylinderCoordsRequest = () => ({
  type: SUBMIT_FIT_CYLINDER_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitFitCylinderCoordsSuccess = response => ({
  type: SUBMIT_FIT_CYLINDER_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitFitCylinderCoordsFailure = error => ({
  type: SUBMIT_FIT_CYLINDER_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitFitCylinderCoords = coords => (dispatch) => {
  dispatch(submitFitCylinderCoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitFitCylinderCoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/fit-cylinder', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response, 'data')) {
        dispatch(submitFitCylinderCoordsSuccess(response.data));
      } else {
        dispatch(submitFitCylinderCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitFitCylinderCoordsFailure(error.message));
    });
};
