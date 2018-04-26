export const PUSH_3D_TRAFO_START_SYSTEM_COORDS = 'PUSH_3D_TRAFO_START_SYSTEM_COORDS';
export const PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS = 'PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS';
export const PUSH_APPLY_TRAFO_COORDS = 'PUSH_APPLY_TRAFO_COORDS';
export const PUSH_FIT_CHEBY_CIRCLE_COORDS = 'PUSH_FIT_CHEBY_CIRCLE_COORDS';
export const PUSH_FIT_CYLINDER_COORDS = 'PUSH_FIT_CYLINDER_COORDS';
export const PUSH_FIT_PLANE_GAUSS_COORDS = 'PUSH_FIT_PLANE_GAUSS_COORDS';
export const PUSH_FIT_PLANE_RANSAC_COORDS = 'PUSH_FIT_PLANE_RANSAC_COORDS';
export const PUSH_FIT_POINT_COORDS = 'PUSH_FIT_POINT_COORDS';
export const PUSH_FIT_LINE_L_TWO_COORDS = 'PUSH_FIT_LINE_L_TWO_COORDS';
export const PUSH_FIT_LINE_RANSAC_COORDS = 'PUSH_FIT_LINE_RANSAC_COORDS';
export const PUSH_FIT_CIRCLE_L_TWO_COORDS = 'PUSH_FIT_CIRCLE_L_TWO_COORDS';
export const PUSH_FIT_SPHERE_COORDS = 'PUSH_FIT_SPHERE_COORDS';
export const PUSH_BUNDLE_ADJUSTMENT_COORDS = 'PUSH_BUNDLE_ADJUSTMENT_COORDS';

/**
 * pushes the 3D trafo start system coordinates
 * @param {Object} coords - the coordinates file from 3DTrafo6W start system input
 */
export const pushThreeDTrafoStartSystemCoords = coords => ({
  type: PUSH_3D_TRAFO_START_SYSTEM_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the 3D trafo target system coordinates
 * @param {Object} coords - the coordinates file from 3DTrafo6W target system input
 */
export const pushThreeDTrafoTargetSystemCoords = coords => ({
  type: PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the trafo coordinates
 * @param {Object} coords - the coordinates file from applyTrafo input
 */
export const pushApplyTrafoCoords = coords => ({
  type: PUSH_APPLY_TRAFO_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the cheby circle coordinates
 * @param {Object} coords - the coordinates file from cheby circle points
 */
export const pushFitChebyCircleCoords = coords => ({
  type: PUSH_FIT_CHEBY_CIRCLE_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the cylinder coordinates
 * @param {Object} coords - the coordinates file from cylinder input
 */
export const pushFitCylinderCoords = coords => ({
  type: PUSH_FIT_CYLINDER_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the gauss plane coordinates
 * @param {Object} coords - the coordinates file from Gauss Plane input
 */
export const pushFitPlaneGaussCoords = coords => ({
  type: PUSH_FIT_PLANE_GAUSS_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the ransac plane coordinates
 * @param {Object} coords - the coordinates file from RANSAC plane input
 */
export const pushFitPlaneRansacCoords = coords => ({
  type: PUSH_FIT_PLANE_RANSAC_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the point coordinates
 * @param {Object} coords - the coordinates file from fit points
 */
export const pushFitPointCoords = coords => ({
  type: PUSH_FIT_POINT_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the line coordinates
 * @param {Object} coords - the coordinates file from fit line points
 */
export const pushFitLineL2Coords = coords => ({
  type: PUSH_FIT_LINE_L_TWO_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the ransac line coordinates
 * @param {Object} coords - the coordinates file from fit line points
 */
export const pushFitLineRansacCoords = coords => ({
  type: PUSH_FIT_LINE_RANSAC_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the circleL2 coordinates
 * @param {Object} coords - the coordinates file from fit line points
 */
export const pushFitCircleL2Coords = coords => ({
  type: PUSH_FIT_CIRCLE_L_TWO_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the sphere coordinates
 * @param {Object} coords - the coordinates file from fit line points
 */
export const pushFitSphereCoords = coords => ({
  type: PUSH_FIT_SPHERE_COORDS,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the bundle coordinates
 * @param {Object} coords - the coordinates file from fit line points
 */
export const pushBundleAdjustmentCoords = coords => ({
  type: PUSH_BUNDLE_ADJUSTMENT_COORDS,
  coords,
  receivedAt: Date.now(),
});
