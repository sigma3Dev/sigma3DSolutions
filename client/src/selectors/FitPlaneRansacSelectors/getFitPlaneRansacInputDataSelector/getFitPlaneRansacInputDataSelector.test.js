import {
  getPlaneRansacPoints,
  getPlaneRansacTolerance,
} from './getFitPlaneRansacInputDataSelector';

describe('getFitPlaneRansacInputDataSelector Used By FitPlaneRansacInputContainer', () => {
  it('getPlaneRansacPoints', () => {
    const state = {
      geometry: {
        fitPlaneRansac: {
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
    const result = getPlaneRansacPoints(state);
    expect(result).toEqual(expected);
  });
  it('getPlaneRansacTolerance', () => {
    const state = {
      geometry: {
        fitPlaneRansac: {
          input: {
            params: {
              tolerance: 0.2,
            },
          },
        },
      },
    };
    const expected = 0.2;
    const result = getPlaneRansacTolerance(state);
    expect(result).toEqual(expected);
  });
});
