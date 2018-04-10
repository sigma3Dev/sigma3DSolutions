import { getPlaneGaussPoints } from './getFitPlaneGaussInputDataSelector';

describe('getFitPlaneGaussInputDataSelector Used By FitPlaneGaussInputContainer', () => {
  it('getPlaneGaussPoints', () => {
    const state = {
      geometry: {
        fitPlaneGauss: {
          input: {
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
    const result = getPlaneGaussPoints(state);
    expect(result).toEqual(expected);
  });
});
