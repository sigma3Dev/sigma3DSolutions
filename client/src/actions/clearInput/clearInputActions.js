export const CLEAR_THREE_D_TRAFO_6W_START_INPUT = 'CLEAR_THREE_D_TRAFO_6W_START_INPUT';
export const CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT = 'CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT';
export const CLEAR_CHEBYSHEV_INPUT = 'CLEAR_CHEBYSHEV_INPUT';
export const CLEAR_APPLY_TRAFO_INPUT = 'CLEAR_APPLY_TRAFO_INPUT';

/** clears the start input */
export const clearThreeDTrafo6WStartInput = () => ({
  type: CLEAR_THREE_D_TRAFO_6W_START_INPUT,
  receivedAt: Date.now(),
});

/** clears the target input */
export const clearThreeDTrafo6WTargetInput = () => ({
  type: CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
  receivedAt: Date.now(),
});

/** clears any cheby input */
export const clearChebyshevInput = () => ({
  type: CLEAR_CHEBYSHEV_INPUT,
  receivedAt: Date.now(),
});

/** clears any apply trafo input */
export const clearApplyTrafoInput = () => ({
  type: CLEAR_APPLY_TRAFO_INPUT,
  receivedAt: Date.now(),
});
