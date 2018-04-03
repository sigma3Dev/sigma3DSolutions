export const PUSH_START_SYSTEM_COORDINATES = 'PUSH_START_SYSTEM_COORDINATES';
export const PUSH_TARGET_SYSTEM_COORDINATES = 'PUSH_TARGET_SYSTEM_COORDINATES';
export const PUSH_COORDINATES = 'PUSH_COORDINATES';

/**
 * pushes the start system coordinates
 * @param {Object} coords - the coordinates file from start system input
 */
export const pushStartSystemCoordinates = coords => ({
  type: PUSH_START_SYSTEM_COORDINATES,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the target system coordinates
 * @param {Object} coords - the coordinates file from target system input
 */
export const pushTargetSystemCoordinates = coords => ({
  type: PUSH_TARGET_SYSTEM_COORDINATES,
  coords,
  receivedAt: Date.now(),
});

/**
 * pushes the coordinates
 * @param {Object} coords - the coordinates file from input
 */
export const pushCoordinates = coords => ({
  type: PUSH_COORDINATES,
  coords,
  receivedAt: Date.now(),
});
