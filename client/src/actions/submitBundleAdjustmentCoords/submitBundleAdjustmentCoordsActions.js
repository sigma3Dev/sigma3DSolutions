export const SUBMIT_BUNDLE_ADJUSTMENT_COORDS = 'SUBMIT_BUNDLE_ADJUSTMENT_COORDS';
export const SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST = 'SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST';
export const SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS = 'SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS';
export const SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE = 'SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitBundleAdjustmentCoords is requested */
export const submitBundleAdjustmentCoordsRequest = () => ({
  type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitBundleAdjustmentCoordsSuccess = response => ({
  type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitBundleAdjustmentCoordsFailure = error => ({
  type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitBundleAdjustmentCoords = coords => (dispatch) => {
  dispatch(submitBundleAdjustmentCoordsRequest());
  return axios
    .post('/bundle-adjustment', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitBundleAdjustmentCoordsSuccess(response));
      } else {
        dispatch(submitBundleAdjustmentCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitBundleAdjustmentCoordsFailure(error.message));
    });
};
