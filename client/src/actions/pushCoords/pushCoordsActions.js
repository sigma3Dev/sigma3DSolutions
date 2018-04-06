export const PUSH_3D_TRAFO_START_SYSTEM_COORDS = 'PUSH_3D_TRAFO_START_SYSTEM_COORDS';
export const PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS = 'PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS';
export const PUSH_APPLY_TRAFO_COORDS = 'PUSH_APPLY_TRAFO_COORDS';
export const PUSH_FIT_PLANE_GAUSS_COORDS = 'PUSH_FIT_PLANE_GAUSS_COORDS';

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
 * pushes the coordinates
 * @param {Object} coords - the coordinates file from input
 */
export const pushFitPlaneGaussCoords = coords => ({
  type: PUSH_FIT_PLANE_GAUSS_COORDS,
  coords,
  receivedAt: Date.now(),
});
