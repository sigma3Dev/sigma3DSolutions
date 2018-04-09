export const SUBMIT_QUAT_TO_CARDAN_COORDS = 'SUBMIT_QUAT_TO_CARDAN_COORDS';
export const SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST = 'SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST';
export const SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS = 'SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS';
export const SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE = 'SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE';

export const SUBMIT_CARDAN_TO_QUAT_COORDS = 'SUBMIT_CARDAN_TO_QUAT_COORDS';
export const SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST = 'SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST';
export const SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS = 'SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS';
export const SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE = 'SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE';

export const CHANGE_QUAT_CARDAN_INPUT_FIELD = 'CHANGE_QUAT_CARDAN_INPUT_FIELD';

const axios = require('axios');

/** doesn't do anything, fires whenever submitQuatToCardanCoords is requested */
export const submitQuatToCardanCoordsRequest = () => ({
  type: SUBMIT_QUAT_TO_CARDAN_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitQuatToCardanCoordsSuccess = response => ({
  type: SUBMIT_QUAT_TO_CARDAN_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitQuatToCardanCoordsFailure = error => ({
  type: SUBMIT_QUAT_TO_CARDAN_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitQuatToCardanCoords = coords => (dispatch) => {
  dispatch(submitQuatToCardanCoordsRequest());
  return axios
    .post('/quat-to-cardan', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitQuatToCardanCoordsSuccess(response));
      } else {
        dispatch(submitQuatToCardanCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitQuatToCardanCoordsFailure(error.message));
    });
};

/** doesn't do anything, fires whenever submitCardanToQuatCoords is requested */
export const submitCardanToQuatCoordsRequest = () => ({
  type: SUBMIT_CARDAN_TO_QUAT_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitCardanToQuatCoordsSuccess = response => ({
  type: SUBMIT_CARDAN_TO_QUAT_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitCardanToQuatCoordsFailure = error => ({
  type: SUBMIT_CARDAN_TO_QUAT_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitCardanToQuatCoords = coords => (dispatch) => {
  dispatch(submitCardanToQuatCoordsRequest());
  return axios
    .post('/cardan-to-quat', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitCardanToQuatCoordsSuccess(response));
      } else {
        dispatch(submitCardanToQuatCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitCardanToQuatCoordsFailure(error.message));
    });
};

/**
 * fires whenever input field changes
 * @param {string} name - name of the input field that is changed
 * @param {string} val - value of the input field that is changed
 */
export const changeQuatCardanInputField = (name, val) => ({
  type: CHANGE_QUAT_CARDAN_INPUT_FIELD,
  name,
  val,
  receivedAt: Date.now(),
});
