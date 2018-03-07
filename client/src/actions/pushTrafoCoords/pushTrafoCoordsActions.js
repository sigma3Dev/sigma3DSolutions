export const PUSH_START_SYSTEM_COORDINATES = 'PUSH_START_SYSTEM_COORDINATES';
export const PUSH_TARGET_SYSTEM_COORDINATES = 'PUSH_TARGET_SYSTEM_COORDINATES';

/* pushes the start system coordinates */
export const pushStartSystemCoordinates = (coords)  => ({
  type: PUSH_START_SYSTEM_COORDINATES,
  coords,
  receivedAt: Date.now(),
});

/* pushes the target system coordinates */
export const pushTargetSystemCoordinates = (coords)  => ({
  type: PUSH_TARGET_SYSTEM_COORDINATES,
  coords,
  receivedAt: Date.now(),
});