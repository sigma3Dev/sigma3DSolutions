import {
  CLEAR_THREE_D_TRAFO_6W_START_INPUT,
  clearThreeDTrafo6WStartInput,
  CLEAR_THREE_D_TRAFO_6W_TARGET_INPUT,
  clearThreeDTrafo6WTargetInput,
  CLEAR_CHEBYSHEV_INPUT,
  clearChebyshevInput,
  CLEAR_APPLY_TRAFO_INPUT,
  clearApplyTrafoInput,
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
});
