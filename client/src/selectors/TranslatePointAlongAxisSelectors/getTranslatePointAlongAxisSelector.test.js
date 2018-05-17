import { getTranslatePointAlongAxis } from './getTranslatePointAlongAxisSelector';

describe('getTranslatePointAlongAxisSelector Used By TranslatePointAlongAxisContainer', () => {
  it('getTranslatePointAlongAxis', () => {
    const state = {
      transformations: {
        translatePointAlongAxis: {
          translatePointAlongAxis: {
            x: 1380.4859742435729,
            y: 9336.536415479428,
            z: -3796.3960642844177,
          },
        },
      },
    };
    const expected = ['1380.49', '9336.54', '-3796.40'];
    const result = getTranslatePointAlongAxis(state);
    expect(result).toEqual(expected);
  });
});
