import { getCirclePoints } from './getFitCircleChebyshevInputDataSelector';

describe('getFitCircleChebyshevInputDataSelector Used By FitCircleChebyshevInputContainer', () => {
  it('getCirclePoints', () => {
    const state = {
      geometry: {
        fitCircleChebyshev: {
          input: {
            circlePoints: [
              {
                x: 1.0,
                y: 2.0,
                z: 3.0,
              },
              {
                x: 6.0,
                y: 8.0,
                z: 5.0,
              },
            ],
          },
        },
      },
    };
    const expected = [
      {
        x: 1.0,
        y: 2.0,
        z: 3.0,
      },
      {
        x: 6.0,
        y: 8.0,
        z: 5.0,
      },
    ];
    const result = getCirclePoints(state);
    expect(result).toEqual(expected);
  });
});
