export const SUBMIT_PARAM_INVERSION_COORDS = 'SUBMIT_PARAM_INVERSION_COORDS';
export const SUBMIT_PARAM_INVERSION_COORDS_REQUEST = 'SUBMIT_PARAM_INVERSION_COORDS_REQUEST';
export const SUBMIT_PARAM_INVERSION_COORDS_SUCCESS = 'SUBMIT_PARAM_INVERSION_COORDS_SUCCESS';
export const SUBMIT_PARAM_INVERSION_COORDS_FAILURE = 'SUBMIT_PARAM_INVERSION_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitParamInversionCoords is requested */
export const submitParamInversionCoordsRequest = () => ({
  type: SUBMIT_PARAM_INVERSION_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitParamInversionCoordsSuccess = response => ({
  type: SUBMIT_PARAM_INVERSION_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitParamInversionCoordsFailure = error => ({
  type: SUBMIT_PARAM_INVERSION_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitParamInversionCoords = coords => (dispatch) => {
  dispatch(submitParamInversionCoordsRequest());
  return axios.post('/param-inversion', {
    coords,
  })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitParamInversionCoordsSuccess(response));
      } else {
        dispatch(submitParamInversionCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitParamInversionCoordsFailure(error.message));
    });
};
