export const PUSH_START_SYSTEM_COORDINATES = 'PUSH_START_SYSTEM_COORDINATES';
export const PUSH_TARGET_SYSTEM_COORDINATES = 'PUSH_TARGET_SYSTEM_COORDINATES';
export const CHECKBOX_UPDATE = 'CHECKBOX_UPDATE';
export const SUBMIT_COORDS = 'SUBMIT_COORDS';
export const SUBMIT_COORDS_REQUEST = 'SUBMIT_COORDS_REQUEST';
export const SUBMIT_COORDS_SUCCESS = 'SUBMIT_COORDS_SUCCESS';
export const SUBMIT_COORDS_FAILURE = 'SUBMIT_COORDS_FAILURE';

const axios = require('axios');

/* pushes the start system coordinates */
export const pushStartSystemCoordinates = (coords)  => ({
  type: PUSH_START_SYSTEM_COORDINATES,
  coords,
  receivedAt: Date.now(),
});

/* pushes the target system coordinates */
export const pushTargetSystemCoordinates = (coords)  => ({
  type: PUSH_TARGET_SYSTEM_COORDINATES,
  coords,
  receivedAt: Date.now(),
});

/* handle checkbox changes */
export const checkboxUpdate = (id) => ({
  type: CHECKBOX_UPDATE,
  id,
  receivedAt: Date.now(),
});

export const submitCoordsRequest = () => ({
  type: SUBMIT_COORDS_REQUEST,
  receivedAt: Date.now(),
});

export const submitCoordsSuccess = (response) => ({
  type: SUBMIT_COORDS_REQUEST,
  response,
  receivedAt: Date.now(),
});

export const SubmitCoordsFailure = (error) => ({
  type: SUBMIT_COORDS_REQUEST,
  error,
  receivedAt: Date.now(),
})

export const submitCoords = () => (dispatch, getState) => {
  dispatch(submitCoordsRequest());
  const coords = getState();
  return axios.post('/calculate-trafo', {
    coords
  })
  .then(response => dispatch(submitCoordsSuccess))
  .catch(error => dispatch(SubmitCoordsFailure));
};