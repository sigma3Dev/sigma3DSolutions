import {
  getPoints,
  getParams,
} from './getApplyTrafoInputDataSelector';

describe('getApplyTrafoInputDataSelector', () => {
  it('getPoints', () => {
    const state = {
      applyTrafoDataInput: {
        points: [
          {
            x: 1,
            y: 2,
            z: 3,
          }, {
            x: 4,
            y: 5,
            z: 6,
          },
        ],
      },
    };
    const expected = [
      {
        x: 1,
        y: 2,
        z: 3,
      }, {
        x: 4,
        y: 5,
        z: 6,
      },
    ];
    const result = getPoints(state);
    expect(result).toEqual(expected);
  });
  it('getParams', () => {
    const state = {
      applyTrafoDataInput: {
        transformation: {
          tx: 10,
          ty: 10,
          tz: 10,
          q0: 1,
          q1: 0,
          q2: 0,
          q3: 0,
          m: 1,
        },
      },
    };
    const expected = {
      tx: 10,
      ty: 10,
      tz: 10,
      q0: 1,
      q1: 0,
      q2: 0,
      q3: 0,
      m: 1,
    };
    const result = getParams(state);
    expect(result).toEqual(expected);
  });
});
