import { getIsCalculating, getFitLineL2Result } from './getFitLineL2ResultDataSelector';

describe('getFitLineL2ResultDataSelector', () => {
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
  it('getFitLineL2Result', () => {
    const state = {
      geometry: {
        fitLineL2: {
          result: {
            x: 11.833,
            y: 8.633,
            z: 11.6,
            i: 0.0,
            j: 0.0,
            k: 1.0,
            stdev: 0.0,
          },
        },
      },
    };
    const expected = [11.833, 8.633, 11.6, 0.0, 0.0, 1.0, 0.0];
    const result = getFitLineL2Result(state);
    expect(result).toEqual(expected);
  });
});
