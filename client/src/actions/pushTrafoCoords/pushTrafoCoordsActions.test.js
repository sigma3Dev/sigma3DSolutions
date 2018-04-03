import {
  PUSH_START_SYSTEM_COORDINATES,
  pushStartSystemCoordinates,
  PUSH_TARGET_SYSTEM_COORDINATES,
  pushTargetSystemCoordinates,
} from './pushTrafoCoordsActions';

describe('pushTrafoCoordsActions', () => {
  it('should create a PUSH_START_SYSTEM_COORDINATES action', () => {
    const startSystemPoints = [
      {
        x: 1.0,
        y: 2.0,
        z: 3.0,
      },
      {
        x: 4.0,
        y: 5.0,
        z: 6.0,
      },
    ];
    const expected = {
      type: PUSH_START_SYSTEM_COORDINATES,
      coords: startSystemPoints,
    };
    const result = pushStartSystemCoordinates(startSystemPoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_TARGET_SYSTEM_COORDINATES action', () => {
    const startSystemPoints = [
      {
        x: 1.0,
        y: 2.0,
        z: 3.0,
        useX: true,
        useY: true,
        useZ: true,
      },
      {
        x: 4.0,
        y: 5.0,
        z: 6.0,
        useX: true,
        useY: false,
        useZ: true,
      },
    ];
    const expected = {
      type: PUSH_TARGET_SYSTEM_COORDINATES,
      coords: startSystemPoints,
    };
    const result = pushTargetSystemCoordinates(startSystemPoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
});
