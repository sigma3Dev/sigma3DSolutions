import { getCylinderPoints } from './getFitCylinderInputDataSelector';

describe('getFitCylinderInputDataSelector Used By FitCylinderInputContainer', () => {
  it('getCylinderPoints', () => {
    const state = {
      geometry: {
        fitCylinder: {
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
    const result = getCylinderPoints(state);
    expect(result).toEqual(expected);
  });
});
