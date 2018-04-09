import { getQuat, getCardan } from './getQuatCardanSelector';

describe('getQuatCardanSelector Used By QuatCardanContainer', () => {
  it('getQuat', () => {
    const state = {
      quatCardan: {
        quat: {
          Q0: -0.9950785875879063,
          Q1: -0.004830151859800749,
          Q2: -0.0006079507786298357,
          Q3: 0.09896921012577276,
        },
      },
    };
    const expected = [
      -0.9950785875879063,
      -0.004830151859800749,
      -0.0006079507786298357,
      0.09896921012577276,
    ];
    const result = getQuat(state);
    expect(result).toEqual(expected);
  });
  it('getCardan', () => {
    const state = {
      quatCardan: {
        cardan: {
          Rx: 10,
          Ry: 6,
          Rz: 2,
        },
      },
    };
    const expected = [10, 6, 2];
    const result = getCardan(state);
    expect(result).toEqual(expected);
  });
});
