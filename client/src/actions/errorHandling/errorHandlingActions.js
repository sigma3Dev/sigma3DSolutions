export const REMOVE_ERROR = 'REMOVE_ERROR';

/** set error back to 'null' */
export const removeError = () => ({
  type: REMOVE_ERROR,
  receivedAt: Date.now(),
});
