import { getPoints } from './getFitPointInputDataSelector';

describe('getFitPointInputDataSelector Used By FitPointInputContainer', () => {
  it('getPoints', () => {
    const state = {
      geometry: {
        fitPoint: {
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
    const result = getPoints(state);
    expect(result).toEqual(expected);
  });
});
