import {
  getFitCircleChebyshevResult,
  getIsCalculating,
} from './getFitCircleChebyshevResultDataSelector';

describe('getFitCircleChebyshevResultDataSelector Used By FitCircleChebyshevInputContainer', () => {
  it('getFitCircleChebyshevResult', () => {
    const state = {
      geometry: {
        fitCircleChebyshev: {
          result: {
            x: 0.01,
            y: 0.01,
            z: 0.01,
            i: 0.000001,
            j: 0.000001,
            k: 1.000001,
            radius: 1.01,
            tschebyDistance: 0.01,
            stdev: 0.01,
          },
        },
      },
    };
    const expected = [0.01, 0.01, 0.01, 0.000001, 0.000001, 1.000001, 1.01, 0.01, 0.01];
    const result = getFitCircleChebyshevResult(state);
    expect(result).toEqual(expected);
  });
  it('getIsCalculating', () => {
    const state = {
      calculationStatus: {
        isCalculating: false,
      },
    };
    const expected = false;
    const result = getIsCalculating(state);
    expect(result).toEqual(expected);
  });
});
