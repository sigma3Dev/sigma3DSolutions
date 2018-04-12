export const UPDATE_FIT_LINE_RANSAC_TOLERANCE = 'UPDATE_FIT_LINE_RANSAC_TOLERANCE';

export const updateFitLineRansacTolerance = newTolerance => ({
  type: UPDATE_FIT_LINE_RANSAC_TOLERANCE,
  newTolerance,
  receivedAt: Date.now(),
});
