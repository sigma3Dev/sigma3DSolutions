import { getIsCalculating, getApplyTrafoResult } from './getApplyTrafoResultDataSelector';

describe('getApplyTrafoResultDataSelector', () => {
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
  it('getApplyTrafoResult', () => {
    const state = {
      transformations: {
        applyTrafo: {
          result: {
            points: [
              {
                x: 1,
                y: 2,
                z: 3,
              },
              {
                x: 4,
                y: 5,
                z: 6,
              },
            ],
          },
        },
      },
    };
    const expected = [
      {
        x: 1,
        y: 2,
        z: 3,
      },
      {
        x: 4,
        y: 5,
        z: 6,
      },
    ];
    const result = getApplyTrafoResult(state);
    expect(result).toEqual(expected);
  });
});
