export const SUBMIT_FIT_PLANE_RANSAC_COORDS = 'SUBMIT_FIT_PLANE_RANSAC_COORDS';
export const SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST = 'SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST';
export const SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS = 'SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS';
export const SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE = 'SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitFitPlaneRansacCoords is requested */
export const submitFitPlaneRansacCoordsRequest = () => ({
  type: SUBMIT_FIT_PLANE_RANSAC_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitFitPlaneRansacCoordsSuccess = response => ({
  type: SUBMIT_FIT_PLANE_RANSAC_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitFitPlaneRansacCoordsFailure = error => ({
  type: SUBMIT_FIT_PLANE_RANSAC_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitFitPlaneRansacCoords = coords => (dispatch) => {
  dispatch(submitFitPlaneRansacCoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitFitPlaneRansacCoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/fit-plane-ransac', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response, 'data')) {
        dispatch(submitFitPlaneRansacCoordsSuccess(response.data));
      } else {
        dispatch(submitFitPlaneRansacCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitFitPlaneRansacCoordsFailure(error.message));
    });
};
