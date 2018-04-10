import { getIsCalculating, getFitCylinderResult } from './getFitCylinderResultDataSelector';

describe('getFitCylinderResultDataSelector', () => {
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
  it('getFitCylinderResult', () => {
    const state = {
      geometry: {
        fitCylinder: {
          result: {
            x: 11.833,
            y: 8.633,
            z: 11.6,
            i: 0.0,
            j: 0.0,
            k: 1.0,
            radius: 1.0,
            stdev: 0.0,
            fittingErrors: [0, 0, 0],
          },
        },
      },
    };
    const expected = [11.833, 8.633, 11.6, 0.0, 0.0, 1.0, 1.0, 0.0, [0, 0, 0]];
    const result = getFitCylinderResult(state);
    expect(result).toEqual(expected);
  });
});
