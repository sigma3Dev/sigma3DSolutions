export const CLEAR_THREE_D_TRAFO_6W_START_INPUT = 'CLEAR_THREE_D_TRAFO_6W_START_INPUT';
export const CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT = 'CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT';
export const CLEAR_CHEBYSHEV_INPUT = 'CLEAR_CHEBYSHEV_INPUT';
export const CLEAR_APPLY_TRAFO_INPUT = 'CLEAR_APPLY_TRAFO_INPUT';
export const CLEAR_PLANE_GAUSS_INPUT = 'CLEAR_PLANE_GAUSS_INPUT';
export const CLEAR_PLANE_RANSAC_INPUT = 'CLEAR_PLANE_RANSAC_INPUT';
export const CLEAR_CYLINDER_INPUT = 'CLEAR_CYLINDER_INPUT';
export const CLEAR_POINT_INPUT = 'CLEAR_POINT_INPUT';
export const CLEAR_LINE_L_TWO_INPUT = 'CLEAR_LINE_L_TWO_INPUT';
export const CLEAR_LINE_RANSAC_INPUT = 'CLEAR_LINE_RANSAC_INPUT';
export const CLEAR_CIRCLE_L_TWO_INPUT = 'CLEAR_CIRCLE_L_TWO_INPUT';
export const CLEAR_SPHERE_INPUT = 'CLEAR_SPHERE_INPUT';
export const CLEAR_BUNDLE_INPUT = 'CLEAR_BUNDLE_INPUT';

/** clears the 3dTrafo6W start input */
export const clearThreeDTrafo6WStartInput = () => ({
  type: CLEAR_THREE_D_TRAFO_6W_START_INPUT,
  receivedAt: Date.now(),
});

/** clears the 3dTrafo6W target input */
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

/** clears any Gauss plane input */
export const clearPlaneGaussInput = () => ({
  type: CLEAR_PLANE_GAUSS_INPUT,
  receivedAt: Date.now(),
});

/** clears any plane RANSAC input */
export const clearPlaneRansacInput = () => ({
  type: CLEAR_PLANE_RANSAC_INPUT,
  receivedAt: Date.now(),
});

/** clears any cylinder input */
export const clearCylinderInput = () => ({
  type: CLEAR_CYLINDER_INPUT,
  receivedAt: Date.now(),
});

/** clears any point input */
export const clearPointInput = () => ({
  type: CLEAR_POINT_INPUT,
  receivedAt: Date.now(),
});

/** clears any line input */
export const clearLineL2Input = () => ({
  type: CLEAR_LINE_L_TWO_INPUT,
  receivedAt: Date.now(),
});

/** clears any ransac line input */
export const clearLineRansacInput = () => ({
  type: CLEAR_LINE_RANSAC_INPUT,
  receivedAt: Date.now(),
});

/** clears any circleL2 input */
export const clearCircleL2Input = () => ({
  type: CLEAR_CIRCLE_L_TWO_INPUT,
  receivedAt: Date.now(),
});

/** clears any sphere input */
export const clearSphereInput = () => ({
  type: CLEAR_SPHERE_INPUT,
  receivedAt: Date.now(),
});

/** clears any bundle input */
export const clearBundleInput = () => ({
  type: CLEAR_BUNDLE_INPUT,
  receivedAt: Date.now(),
});
