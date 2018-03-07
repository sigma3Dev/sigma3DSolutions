export const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';
export const SUBMIT_COORDS = 'SUBMIT_COORDS';
export const SUBMIT_COORDS_REQUEST = 'SUBMIT_COORDS_REQUEST';
export const SUBMIT_COORDS_SUCCESS = 'SUBMIT_COORDS_SUCCESS';
export const SUBMIT_COORDS_FAILURE = 'SUBMIT_COORDS_FAILURE';

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
export const SubmitCoordsFailure = (error) => ({
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
const submitCoords = () => (dispatch, getState) => {
  dispatch(submitCoordsRequest());
  const coords = getState();
  return axios.post('/calculate-trafo', {
      coords
    })
    .then(response => dispatch(submitCoordsSuccess(response)))
    .catch(error => dispatch(SubmitCoordsFailure(error)));
};