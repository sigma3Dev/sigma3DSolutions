export const PUSH_3D_TRAFO_START_SYSTEM_COORDS = 'PUSH_3D_TRAFO_START_SYSTEM_COORDS';
export const PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS = 'PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS';
export const PUSH_APPLY_TRAFO_COORDS = 'PUSH_APPLY_TRAFO_COORDS';
export const PUSH_FIT_CHEBY_CIRCLE_COORDS = 'PUSH_FIT_CHEBY_CIRCLE_COORDS';
export const PUSH_FIT_CYLINDER_COORDS = 'PUSH_FIT_CYLINDER_COORDS';
export const PUSH_FIT_PLANE_GAUSS_COORDS = 'PUSH_FIT_PLANE_GAUSS_COORDS';
export const PUSH_FIT_PLANE_RANSAC_COORDS = 'PUSH_FIT_PLANE_RANSAC_COORDS';
export const PUSH_FIT_POINT_COORDS = 'PUSH_FIT_POINT_COORDS';

/**
 * pushes the start system coordinates
 * @param {Object} coords - the coordinates file from start system input
 */
export const pushThreeDTrafoStartSystemCoords = coords => ({
  type: PUSH_3D_TRAFO_START_SYSTEM_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the target system coordinates
 * @param {Object} coords - the coordinates file from target system input
 */
export const pushThreeDTrafoTargetSystemCoords = coords => ({
  type: PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the coordinates
 * @param {Object} coords - the coordinates file from input
 */
export const pushApplyTrafoCoords = coords => ({
  type: PUSH_APPLY_TRAFO_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the cheby circle coordinates
 * @param {Object} coords - the coordinates file from circle points
 */
export const pushFitChebyCircleCoords = coords => ({
  type: PUSH_FIT_CHEBY_CIRCLE_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the coordinates
 * @param {Object} coords - the coordinates file from input
 */
export const pushFitCylinderCoords = coords => ({
  type: PUSH_FIT_CYLINDER_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the coordinates
 * @param {Object} coords - the coordinates file from input
 */
export const pushFitPlaneGaussCoords = coords => ({
  type: PUSH_FIT_PLANE_GAUSS_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the coordinates
 * @param {Object} coords - the coordinates file from input
 */
export const pushFitPlaneRansacCoords = coords => ({
  type: PUSH_FIT_PLANE_RANSAC_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the point coordinates
 * @param {Object} coords - the coordinates file from circle points
 */
export const pushFitPointCoords = coords => ({
  type: PUSH_FIT_POINT_COORDS,
  coords,
  receivedAt: Date.now(),
});
