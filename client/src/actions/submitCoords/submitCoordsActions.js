export const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';
export const SUBMIT_COORDS = 'SUBMIT_COORDS';
export const SUBMIT_COORDS_REQUEST = 'SUBMIT_COORDS_REQUEST';
export const SUBMIT_COORDS_SUCCESS = 'SUBMIT_COORDS_SUCCESS';
export const SUBMIT_COORDS_FAILURE = 'SUBMIT_COORDS_FAILURE';
export const CALCULATE_TRAFO_DIFFERENCE = 'CALCULATE_TRAFO_DIFFERENCE';
export const CALCULATE_TRAFO_DIFFERENCE_REQUEST = 'CALCULATE_TRAFO_DIFFERENCE_REQUEST';
export const CALCULATE_TRAFO_DIFFERENCE_SUCCESS = 'CALCULATE_TRAFO_DIFFERENCE_SUCCESS';
export const CALCULATE_TRAFO_DIFFERENCE_FAILURE = 'CALCULATE_TRAFO_DIFFERENCE_FAILURE';

const axios = require('axios');

/**
 * handle checkbox changes
 * @param {string} id - The id of the checkbox
 */
export const checkboxUpdate = (id) => ({
  type: CHECKBOX_UPDATE,
  id,
  receivedAt: Date.now(),
});

/** doesn't do anything, fires whenever submitCoords is requested */
export const submitCoordsRequest = () => ({
  type: SUBMIT_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/** 
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitCoordsSuccess = (response) => ({
  type: SUBMIT_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/** 
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitCoordsFailure = (error) => ({
  type: SUBMIT_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitCoords = (coords) => (dispatch, getState) => {
  dispatch(submitCoordsRequest());
  return axios.post('/calculate-trafo', {
      coords
    })
    .then(response => {
      if (response.data.hasOwnProperty('result')) {
        dispatch(submitCoordsSuccess(response));
      } else {
        dispatch(submitCoordsFailure(response.data.error.message))
      }
    })
    .catch(error => {
      dispatch(submitCoordsFailure(error.message));
    })
};

/** doesn't do anything, fires whenever calculateTrafoDifference is requested */
export const calculateTrafoDifferenceRequest = () => ({
  type: CALCULATE_TRAFO_DIFFERENCE_REQUEST,
  receivedAt: Date.now(),
});

/** 
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const calculateTrafoDifferenceSuccess = (response) => ({
  type: CALCULATE_TRAFO_DIFFERENCE_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/** 
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const calculateTrafoDifferenceFailure = (error) => ({
  type: CALCULATE_TRAFO_DIFFERENCE_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const calculateTrafoDifference = (startPoints, targetPoints, trafoParams) => (dispatch, getState) => {
  dispatch(calculateTrafoDifferenceRequest());
  return axios.post('/calculate-trafo-difference', {
      startPoints,
      targetPoints,
      trafoParams,
    })
    .then(response => {
      if (response.data !== [] && response.data[0].hasOwnProperty('vx')) {
        dispatch(calculateTrafoDifferenceSuccess(response));
      } else {
        dispatch(calculateTrafoDifferenceFailure(response.data.error.message))
      }
    })
    .catch(error => {
      dispatch(calculateTrafoDifferenceFailure(error.message));
    })
};