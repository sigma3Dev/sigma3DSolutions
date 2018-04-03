import {
  PUSH_3D_TRAFO_START_SYSTEM_COORDS,
  pushThreeDTrafoStartSystemCoords,
  PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
  pushThreeDTrafoTargetSystemCoords,
} from './pushTrafoCoordsActions';

describe('pushThreeDTrafoCoordsActions', () => {
  it('should create a PUSH_3D_TRAFO_START_SYSTEM_COORDS action', () => {
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
      type: PUSH_3D_TRAFO_START_SYSTEM_COORDS,
      coords: startSystemPoints,
    };
    const result = pushThreeDTrafoStartSystemCoords(startSystemPoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS action', () => {
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
      type: PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
      coords: startSystemPoints,
    };
    const result = pushThreeDTrafoTargetSystemCoords(startSystemPoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
});
