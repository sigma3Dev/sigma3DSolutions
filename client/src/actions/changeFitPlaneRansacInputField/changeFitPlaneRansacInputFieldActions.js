export const UPDATE_FIT_PLANE_RANSAC_TOLERANCE = 'UPDATE_FIT_PLANE_RANSAC_TOLERANCE';

export const updateFitPlaneRansacTolerance = newTolerance => ({
  type: UPDATE_FIT_PLANE_RANSAC_TOLERANCE,
  newTolerance,
  receivedAt: Date.now(),
});
