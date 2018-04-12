import { getIsCalculating, getFitSphereResult } from './getFitSphereResultDataSelector';

describe('getFitSphereResultDataSelector', () => {
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
  it('getFitSphereResult', () => {
    const state = {
      geometry: {
        fitSphere: {
          result: {
            x: 11.833,
            y: 8.633,
            z: 11.6,
            radius: 1.0,
            stdev: 0.0,
          },
        },
      },
    };
    const expected = [11.833, 8.633, 11.6, 1.0, 0.0];
    const result = getFitSphereResult(state);
    expect(result).toEqual(expected);
  });
});
