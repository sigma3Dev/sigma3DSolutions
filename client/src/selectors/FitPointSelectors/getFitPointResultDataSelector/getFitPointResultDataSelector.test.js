import { getIsCalculating, getFitPointResult } from './getFitPointResultDataSelector';

describe('getFitPointResultDataSelector', () => {
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
  it('getFitPointResult', () => {
    const state = {
      geometry: {
        fitPoint: {
          result: {
            x: 11.833,
            y: 8.633,
            z: 11.6,
            stdev: 0.0,
            fittingErrors: [0, 0, 0],
          },
        },
      },
    };
    const expected = [11.833, 8.633, 11.6, 0.0, [0, 0, 0]];
    const result = getFitPointResult(state);
    expect(result).toEqual(expected);
  });
});
