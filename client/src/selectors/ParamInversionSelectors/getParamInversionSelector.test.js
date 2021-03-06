import { getParamInversion } from './getParamInversionSelector';

describe('getParamInversionSelector Used By ParamInversionContainer', () => {
  it('getParamInversion', () => {
    const state = {
      transformations: {
        paramInversion: {
          paramInversion: {
            tx: 1380.4859742435729,
            ty: 9336.536415479428,
            tz: -3796.3960642844177,
            q0: -0.9950785875879063,
            q1: -0.004830151859800749,
            q2: -0.0006079507786298357,
            q3: 0.09896921012577276,
            m: 1,
          },
        },
      },
    };
    const expected = [
      '1380.49',
      '9336.54',
      '-3796.40',
      '-0.9951',
      '-0.0048',
      '-0.0006',
      '0.0990',
      '1.0',
    ];
    const result = getParamInversion(state);
    expect(result).toEqual(expected);
  });
});
