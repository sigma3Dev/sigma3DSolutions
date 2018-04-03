export const PUSH_3D_TRAFO_START_SYSTEM_COORDS = 'PUSH_3D_TRAFO_START_SYSTEM_COORDS';
export const PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS = 'PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS';
export const PUSH_COORDS = 'PUSH_COORDS';

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
export const pushCoords = coords => ({
  type: PUSH_COORDS,
  coords,
  receivedAt: Date.now(),
});
