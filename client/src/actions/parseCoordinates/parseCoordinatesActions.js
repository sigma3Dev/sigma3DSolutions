import axios from 'axios';

export const PARSE_COORDINATES_REQUEST = 'PARSE_COORDINATES_REQUEST';
export const PARSE_COORDINATES_SUCCESS = 'PARSE_COORDINATES_SUCCESS';
export const PARSE_COORDINATES_FAILURE = 'PARSE_COORDINATES_FAILURE';

/**
 * Indicates the start of fetching the Version.
 *
 * @returns {{type: string}}
 */
export const parseCoordinatesRequest = () => ({ type: PARSE_COORDINATES_REQUEST });

/**
 * Indicates that the Version were successfully fetched.
 *
 * @param response
 */
export const parseCoordinatesSuccess = response => ({
  type: PARSE_COORDINATES_SUCCESS,
  response,
  receivedAt: Date.now(),
});

/**
 * Indicates a failure while trying to fetch the Version.
 *
 * @param error
 */
export const parseCoordinatesFailure = error => ({
  type: PARSE_COORDINATES_FAILURE,
  error,
  receivedAt: Date.now(),
});

/**
 * Fetches the Version.
 *
 * @returns {function(): axios.Promise}
 */
export const parseCoordinates = (file) => (dispatch) => {
  dispatch(parseCoordinatesRequest());
  return axios.post('/parse-coordinates', {
    file: file
  })
    .then((response) => {
      dispatch(parseCoordinatesSuccess(response));
    })
    .catch((error) => {
      dispatch(parseCoordinatesFailure(error));
    });
};
