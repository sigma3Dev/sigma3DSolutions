export const PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES = 'PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES';

/**
 * pushes the circle coordinates 
 * @param {Object} coords - the coordinates file from circle points
 */
export const pushChebyshevCircleFitCoords = (coords)  => ({
  type: PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES,
  coords,
  receivedAt: Date.now(),
});