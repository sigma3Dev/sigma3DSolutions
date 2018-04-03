import {
  CLEAR_START_INPUT,
  clearStartInput,
  CLEAR_TARGET_INPUT,
  clearTargetInput,
  CLEAR_CHEBYSHEV_INPUT,
  clearChebyshevInput,
} from './clearInputActions';

describe('clearInputActions', () => {
  it('should create a CLEAR_START_INPUT action', () => {
    const expected = {
      type: CLEAR_START_INPUT,
    };
    const result = clearStartInput();
    expect(result.type).toEqual(expected.type);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a CLEAR_TARGET_INPUT action', () => {
    const expected = {
      type: CLEAR_TARGET_INPUT,
    };
    const result = clearTargetInput();
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
});
