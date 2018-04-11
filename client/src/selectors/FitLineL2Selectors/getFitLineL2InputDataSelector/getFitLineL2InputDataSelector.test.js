import { getLineL2Points } from './getFitLineL2InputDataSelector';

describe('getFitLineL2InputDataSelector Used By FitLineL2InputContainer', () => {
  it('getLineL2Points', () => {
    const state = {
      geometry: {
        fitLineL2: {
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
    const result = getLineL2Points(state);
    expect(result).toEqual(expected);
  });
});
