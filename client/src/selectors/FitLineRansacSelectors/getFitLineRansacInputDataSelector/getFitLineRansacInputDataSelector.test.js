import { getLineRansacPoints, getLineRansacTolerance } from './getFitLineRansacInputDataSelector';

describe('getFitLineRansacInputDataSelector Used By FitLineRansacInputContainer', () => {
  it('getLineRansacPoints', () => {
    const state = {
      geometry: {
        fitLineRansac: {
          input: {
            params: {
              points: [
                {
                  x: 12.5,
                  y: 23.7,
                  z: 11.6,
                },
                {
                  x: 14.5,
                  y: 6.7,
                  z: 11.6,
                },
                {
                  x: 8.5,
                  y: -4.5,
                  z: 11.6,
                },
              ],
            },
          },
        },
      },
    };
    const expected = [
      {
        x: 12.5,
        y: 23.7,
        z: 11.6,
      },
      {
        x: 14.5,
        y: 6.7,
        z: 11.6,
      },
      {
        x: 8.5,
        y: -4.5,
        z: 11.6,
      },
    ];
    const result = getLineRansacPoints(state);
    expect(result).toEqual(expected);
  });
  it('getLineRansacTolerance', () => {
    const state = {
      geometry: {
        fitLineRansac: {
          input: {
            params: {
              tolerance: 0.2,
            },
          },
        },
      },
    };
    const expected = 0.2;
    const result = getLineRansacTolerance(state);
    expect(result).toEqual(expected);
  });
});
