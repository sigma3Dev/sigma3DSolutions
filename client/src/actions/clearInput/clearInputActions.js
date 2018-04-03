export const CLEAR_START_INPUT = 'CLEAR_START_INPUT';
export const CLEAR_TARGET_INPUT = 'CLEAR_TARGET_INPUT';
export const CLEAR_CHEBYSHEV_INPUT = 'CLEAR_CHEBYSHEV_INPUT';

/** clears the start input */
export const clearStartInput = () => ({
  type: CLEAR_START_INPUT,
  receivedAt: Date.now(),
});

/** clears the target input */
export const clearTargetInput = () => ({
  type: CLEAR_TARGET_INPUT,
  receivedAt: Date.now(),
});

/** clears any input */
export const clearChebyshevInput = () => ({
  type: CLEAR_CHEBYSHEV_INPUT,
  receivedAt: Date.now(),
});
