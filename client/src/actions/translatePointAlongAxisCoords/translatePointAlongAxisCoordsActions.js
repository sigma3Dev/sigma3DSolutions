export const SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS = 'SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS';
export const SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST =
  'SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST';
export const SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS =
  'SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS';
export const SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_FAILURE =
  'SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitTranslatePointAlongAxisCoords is requested */
export const submitTranslatePointAlongAxisCoordsRequest = () => ({
  type: SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitTranslatePointAlongAxisCoordsSuccess = response => ({
  type: SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitTranslatePointAlongAxisCoordsFailure = error => ({
  type: SUBMIT_TRANSLATE_POINT_ALONG_AXIS_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitTranslatePointAlongAxisCoords = coords => (dispatch) => {
  dispatch(submitTranslatePointAlongAxisCoordsRequest());
  return axios
    .post('/translate-point-along-axis', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitTranslatePointAlongAxisCoordsSuccess(response));
      } else {
        dispatch(submitTranslatePointAlongAxisCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitTranslatePointAlongAxisCoordsFailure(error.message));
    });
};
