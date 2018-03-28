export const SUBMIT_APPLY_TRAFO_VALUES = 'SUBMIT_APPLY_TRAFO_VALUES';
export const SUBMIT_APPLY_TRAFO_VALUES_REQUEST = 'SUBMIT_APPLY_TRAFO_VALUES_REQUEST';
export const SUBMIT_APPLY_TRAFO_VALUES_SUCCESS = 'SUBMIT_APPLY_TRAFO_VALUES_SUCCESS';
export const SUBMIT_APPLY_TRAFO_VALUES_FAILURE = 'SUBMIT_APPLY_TRAFO_VALUES_FAILURE';

const axios = require('axios');

/** doesn't do anything, fires whenever submitApplyTrafoValues is requested */
export const submitApplyTrafoValuesRequest = () => ({
  type: SUBMIT_APPLY_TRAFO_VALUES_REQUEST,
  receivedAt: Date.now(),
});

/** 
 * fired when a response is returned from the backend
 * @param {Object} response - Response that is returned from the node server
 */
export const submitApplyTrafoValuesSuccess = (response) => ({
  type: SUBMIT_APPLY_TRAFO_VALUES_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/** 
 * fired when an error is returned from the backend
 * @param {Object} error - Error that is returned from the node server
 */
export const submitApplyTrafoValuesFailure = (error) => ({
  type: SUBMIT_APPLY_TRAFO_VALUES_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * sends an axios request to the backend
 * @param {dispatchCallback} dispatch - callback that handles dispatching of the action
 * @param {getStateCallback} getState - callback that gets current state
 * @returns {Object} response from backend or error message
 */
export const submitApplyTrafoValues = (values) => (dispatch) => {
  dispatch(submitApplyTrafoValuesRequest());
  if (!values || values.length === 0) {
    return dispatch(submitApplyTrafoValuesFailure("Object of input coordinates is not valid!"));
  }
  return axios.post('/apply-trafo', {
      values
    })
    .then(response => {
      if (response.data.hasOwnProperty('result')) {
        dispatch(submitApplyTrafoValuesSuccess(response));
      } else {
        dispatch(submitApplyTrafoValuesFailure(response.data.error.message))
      }
    })
    .catch(error => {
      dispatch(submitApplyTrafoValuesFailure(error.message));
    })
};