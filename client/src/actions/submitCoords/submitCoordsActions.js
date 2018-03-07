export const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';
export const SUBMIT_COORDS = 'SUBMIT_COORDS';
export const SUBMIT_COORDS_REQUEST = 'SUBMIT_COORDS_REQUEST';
export const SUBMIT_COORDS_SUCCESS = 'SUBMIT_COORDS_SUCCESS';
export const SUBMIT_COORDS_FAILURE = 'SUBMIT_COORDS_FAILURE';

const axios = require('axios');

/* handle checkbox changes */
export const checkboxUpdate = (id) => ({
  type: CHECKBOX_UPDATE,
  id,
  receivedAt: Date.now(),
});

/* doesn't do anything, fires whenever submitCoords is requested */
export const submitCoordsRequest = () => ({
  type: SUBMIT_COORDS_REQUEST,
  receivedAt: Date.now(),
});

/* fired when a response comes back from the backend */
export const submitCoordsSuccess = (response) => ({
  type: SUBMIT_COORDS_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/* fired when an error comes back from the backend */
export const SubmitCoordsFailure = (error) => ({
  type: SUBMIT_COORDS_FAILURE,
  error,
  receivedAt: Date.now(),
});

/* sends an axios request with the coordinates to the backend */
export const submitCoords = () => (dispatch, getState) => {
  dispatch(submitCoordsRequest());
  const coords = getState();
  return axios.post('/calculate-trafo', {
    coords
  })
  .then(response => dispatch(submitCoordsSuccess(response)))
  .catch(error => dispatch(SubmitCoordsFailure(error)));
};