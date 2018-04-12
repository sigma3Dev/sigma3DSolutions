import {
  CLEAR_THREE_D_TRAFO_6W_START_INPUT,
  clearThreeDTrafo6WStartInput,
  CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
  clearThreeDTrafo6WTargetInput,
  CLEAR_CHEBYSHEV_INPUT,
  clearChebyshevInput,
  CLEAR_APPLY_TRAFO_INPUT,
  clearApplyTrafoInput,
  CLEAR_PLANE_GAUSS_INPUT,
  clearPlaneGaussInput,
  CLEAR_PLANE_RANSAC_INPUT,
  clearPlaneRansacInput,
  CLEAR_CYLINDER_INPUT,
  clearCylinderInput,
  CLEAR_POINT_INPUT,
  clearPointInput,
  CLEAR_LINE_L_TWO_INPUT,
  clearLineL2Input,
  CLEAR_LINE_RANSAC_INPUT,
  clearLineRansacInput,
  CLEAR_CIRCLE_L_TWO_INPUT,
  clearCircleL2Input,
} from './clearInputActions';

describe('clearInputActions', () => {
  it('should create a CLEAR_START_INPUT action', () => {
    const expected = {
      type: CLEAR_THREE_D_TRAFO_6W_START_INPUT,
    };
    const result = clearThreeDTrafo6WStartInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_TARGET_INPUT action', () => {
    const expected = {
      type: CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
    };
    const result = clearThreeDTrafo6WTargetInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_CHEBYSHEV_INPUT action', () => {
    const expected = {
      type: CLEAR_CHEBYSHEV_INPUT,
    };
    const result = clearChebyshevInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_APPLY_TRAFO_INPUT action', () => {
    const expected = {
      type: CLEAR_APPLY_TRAFO_INPUT,
    };
    const result = clearApplyTrafoInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_PLANE_GAUSS_INPUT action', () => {
    const expected = {
      type: CLEAR_PLANE_GAUSS_INPUT,
    };
    const result = clearPlaneGaussInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_PLANE_RANSAC_INPUT action', () => {
    const expected = {
      type: CLEAR_PLANE_RANSAC_INPUT,
    };
    const result = clearPlaneRansacInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_CYLINDER_INPUT action', () => {
    const expected = {
      type: CLEAR_CYLINDER_INPUT,
    };
    const result = clearCylinderInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_POINT_INPUT action', () => {
    const expected = {
      type: CLEAR_POINT_INPUT,
    };
    const result = clearPointInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_LINE_L_TWO_INPUT action', () => {
    const expected = {
      type: CLEAR_LINE_L_TWO_INPUT,
    };
    const result = clearLineL2Input();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_LINE_RANSAC_INPUT action', () => {
    const expected = {
      type: CLEAR_LINE_RANSAC_INPUT,
    };
    const result = clearLineRansacInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_CIRCLE_L_TWO_INPUT action', () => {
    const expected = {
      type: CLEAR_CIRCLE_L_TWO_INPUT,
    };
    const result = clearCircleL2Input();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
});
