import {
  getChebyshevCircleFitInput,
  getIsCalculating,
} from './getChebyshevCircleFitResultDataSelector';

describe('getChebyshevCircleFitResultDataSelector Used By ChebyshevCFInputContainer', () => {
  it('getChebyshevCircleFitInput', () => {
    const state = {
      chebyshevCircleFitResult: {
        x: 0,
        y: 0,
        z: 0,
        i: 0,
        j: 0,
        k: 1,
        radius: 1,
        tschebyDistance: 0,
        stdev: 0,
      }
    };
    const expected = [
      "0.00",
      "0.00",
      "0.00",
      "0.00000",
      "0.00000",
      "1.00000",
      "1.0",
      "0.0",
      "0.0",
    ]
    const result = getChebyshevCircleFitInput(state);
    expect(result).toEqual(expected);
  });
  it('getIsCalculating', () => {
    const state = {
      calculationStatus: {
        isCalculating: false
      }
    }
    const expected = false;
    const result = getIsCalculating(state);
    expect(result).toEqual(expected);
  });
});