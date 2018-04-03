import {
  getStartSystemPoints,
  getTargetSystemPoints,
  getListOfUsedCoords,
} from './getTrafoInputDataSelector';

describe('getTrafoInputDataSelector Used By ThreeDTrafoInputContainer', () => {
  it('getStartSystemPoints', () => {
    const state = {
      trafoDataInput: {
        startSystemPoints: [
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
    const result = getStartSystemPoints(state);
    expect(result).toEqual(expected);
  });
  it('getTargetSystemPoints', () => {
    const state = {
      trafoDataInput: {
        targetSystemPoints: [
          {
            x: 1.0,
            y: 2.0,
            z: 3.0,
            useX: true,
            useY: true,
            useZ: true,
          },
          {
            x: 6.0,
            y: 8.0,
            z: 5.0,
            useX: true,
            useY: true,
            useZ: true,
          },
        ],
      },
    };
    const expected = [
      {
        x: 1.0,
        y: 2.0,
        z: 3.0,
        useX: true,
        useY: true,
        useZ: true,
      },
      {
        x: 6.0,
        y: 8.0,
        z: 5.0,
        useX: true,
        useY: true,
        useZ: true,
      },
    ];
    const result = getTargetSystemPoints(state);
    expect(result).toEqual(expected);
  });
  it('getListOfUsedCoords', () => {
    const state = {
      trafoDataInput: {
        targetSystemPoints: [
          {
            x: 1.0,
            y: 2.0,
            z: 3.0,
            useX: true,
            useY: true,
            useZ: true,
          },
          {
            x: 6.0,
            y: 8.0,
            z: 5.0,
            useX: true,
            useY: true,
            useZ: true,
          },
        ],
      },
    };
    const expected = [[true, true, true], [true, true, true]];
    const result = getListOfUsedCoords(state);
    expect(result).toEqual(expected);
  });
});
