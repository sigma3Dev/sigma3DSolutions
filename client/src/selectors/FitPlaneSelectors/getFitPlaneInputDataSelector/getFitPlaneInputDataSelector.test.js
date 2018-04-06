import { getPlanePoints } from './getFitPlaneInputDataSelector';

describe('getFitPlaneInputDataSelector Used By FitPlaneInputContainer', () => {
  it('getPlanePoints', () => {
    const state = {
      fitPlaneDataInput: {
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
    const result = getPlanePoints(state);
    expect(result).toEqual(expected);
  });
});
