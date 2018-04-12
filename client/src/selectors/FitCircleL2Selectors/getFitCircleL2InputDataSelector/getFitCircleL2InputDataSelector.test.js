import { getCircleL2Points } from './getFitCircleL2InputDataSelector';

describe('getFitCircleL2InputDataSelector Used By FitCircleL2InputContainer', () => {
  it('getCircleL2Points', () => {
    const state = {
      geometry: {
        fitCircleL2: {
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
    const result = getCircleL2Points(state);
    expect(result).toEqual(expected);
  });
});
