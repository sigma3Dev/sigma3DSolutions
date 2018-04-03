export const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';
export const SUBMIT_3D_TRAFO_COORDS = 'SUBMIT_3D_TRAFO_COORDS';
export const SUBMIT_3D_TRAFO_COORDS_REQUEST = 'SUBMIT_3D_TRAFO_COORDS_REQUEST';
export const SUBMIT_3D_TRAFO_COORDS_SUCCESS = 'SUBMIT_3D_TRAFO_COORDS_SUCCESS';
export const SUBMIT_3D_TRAFO_COORDS_FAILURE = 'SUBMIT_3D_TRAFO_COORDS_FAILURE';
export const CALCULATE_3D_TRAFO_DIFFERENCE = 'CALCULATE_3D_TRAFO_DIFFERENCE';
export const CALCULATE_3D_TRAFO_DIFFERENCE_REQUEST = 'CALCULATE_3D_TRAFO_DIFFERENCE_REQUEST';
export const CALCULATE_3D_TRAFO_DIFFERENCE_SUCCESS = 'CALCULATE_3D_TRAFO_DIFFERENCE_SUCCESS';
export const CALCULATE_3D_TRAFO_DIFFERENCE_FAILURE = 'CALCULATE_3D_TRAFO_DIFFERENCE_FAILURE';

const axios = require('axios');

/**
 * handle checkbox changes
 * @param {string} id - The id of the checkbox
 */
export const checkboxUpdate = id => ({
  type: CHECKBOX_UPDATE,
  id,
  receivedAt: Date.now(),
});

/** doesn't do anything, fires whenever submitThreeDTrafoCoords is requested */
export const submitThreeDTrafoCoordsRequest = () => ({
  type: SUBMIT_3D_TRAFO_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitThreeDTrafoCoordsSuccess = response => ({
  type: SUBMIT_3D_TRAFO_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitThreeDTrafoCoordsFailure = error => ({
  type: SUBMIT_3D_TRAFO_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @returns {Object} response from backend or error message
 */
export const submitThreeDTrafoCoords = coords => (dispatch) => {
  dispatch(submitThreeDTrafoCoordsRequest());
  if (!coords || coords.length === 0) {
    return dispatch(submitThreeDTrafoCoordsFailure('Object of input coordinates is not valid!'));
  }
  return axios
    .post('/calculate-trafo', {
      coords,
    })
    .then((response) => {
      if (Object.prototype.hasOwnProperty.call(response.data, 'result')) {
        dispatch(submitThreeDTrafoCoordsSuccess(response));
      } else {
        dispatch(submitThreeDTrafoCoordsFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(submitThreeDTrafoCoordsFailure(error.message));
    });
};

/** doesn't do anything, fires whenever calculateThreeDTrafoDifference is requested */
export const calculateThreeDTrafoDifferenceRequest = () => ({
  type: CALCULATE_3D_TRAFO_DIFFERENCE_REQUEST,
  receivedAt: Date.now(),
});

/**
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const calculateThreeDTrafoDifferenceSuccess = response => ({
  type: CALCULATE_3D_TRAFO_DIFFERENCE_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const calculateThreeDTrafoDifferenceFailure = error => ({
  type: CALCULATE_3D_TRAFO_DIFFERENCE_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const calculateThreeDTrafoDifference = (
  startPoints,
  targetPoints,
  trafoParams,
) => (dispatch) => {
  dispatch(calculateThreeDTrafoDifferenceRequest());
  return axios
    .post('/calculate-trafo-difference', {
      startPoints,
      targetPoints,
      trafoParams,
    })
    .then((response) => {
      if (response.data !== [] && Object.prototype.hasOwnProperty.call(response.data[0], 'vx')) {
        dispatch(calculateThreeDTrafoDifferenceSuccess(response));
      } else {
        dispatch(calculateThreeDTrafoDifferenceFailure(response.data.error.message));
      }
    })
    .catch((error) => {
      dispatch(calculateThreeDTrafoDifferenceFailure(error.message));
    });
};
