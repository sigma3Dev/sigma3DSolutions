export const SUBMIT_FIT_PLANE_COORDS = 'SUBMIT_FIT_PLANE_COORDS';
export const SUBMIT_FIT_PLANE_COORDS_REQUEST = 'SUBMIT_FIT_PLANE_COORDS_REQUEST';
export const SUBMIT_FIT_PLANE_COORDS_SUCCESS = 'SUBMIT_FIT_PLANE_COORDS_SUCCESS';
export const SUBMIT_FIT_PLANE_COORDS_FAILURE = 'SUBMIT_FIT_PLANE_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitFitPlaneCoords is requested */
export const submitFitPlaneCoordsRequest = () => ({
  type: SUBMIT_FIT_PLANE_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitFitPlaneCoordsSuccess = response => ({
  type: SUBMIT_FIT_PLANE_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitFitPlaneCoordsFailure = error => ({
  type: SUBMIT_FIT_PLANE_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitFitPlaneCoords = coords => (dispatch) => {
  dispatch(submitFitPlaneCoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitFitPlaneCoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/fit-plane', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response, 'data')) {
        dispatch(submitFitPlaneCoordsSuccess(response.data));
      } else {
        dispatch(submitFitPlaneCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitFitPlaneCoordsFailure(error));
    });
};
