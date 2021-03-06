import {
  PUSH_3D_TRAFO_START_SYSTEM_COORDS,
  pushThreeDTrafoStartSystemCoords,
  PUSH_3D_TRAFO_TARGET_SYSTEM_COORDS,
  pushThreeDTrafoTargetSystemCoords,
  PUSH_APPLY_TRAFO_COORDS,
  pushApplyTrafoCoords,
  PUSH_FIT_PLANE_GAUSS_COORDS,
  pushFitPlaneGaussCoords,
  PUSH_FIT_PLANE_RANSAC_COORDS,
  pushFitPlaneRansacCoords,
  PUSH_FIT_CYLINDER_COORDS,
  pushFitCylinderCoords,
  PUSH_FIT_POINT_COORDS,
  pushFitPointCoords,
  PUSH_FIT_CHEBY_CIRCLE_COORDS,
  pushFitChebyCircleCoords,
  PUSH_FIT_LINE_L_TWO_COORDS,
  pushFitLineL2Coords,
  PUSH_FIT_LINE_RANSAC_COORDS,
  pushFitLineRansacCoords,
  PUSH_FIT_CIRCLE_L_TWO_COORDS,
  pushFitCircleL2Coords,
  PUSH_FIT_SPHERE_COORDS,
  pushFitSphereCoords,
} from './pushCoordsActions';

describe('pushCoordsActions', () => {
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
  it('should create a PUSH_APPLY_TRAFO_COORDS action', () => {
    const points = [
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
      type: PUSH_APPLY_TRAFO_COORDS,
      coords: points,
    };
    const result = pushApplyTrafoCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_PLANE_GAUSS_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_PLANE_GAUSS_COORDS,
      coords: points,
    };
    const result = pushFitPlaneGaussCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_PLANE_RANSAC_COORDS action', () => {
    const coords = {
      points: [
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
      ],
      tolerance: 0.2,
    };
    const expected = {
      type: PUSH_FIT_PLANE_RANSAC_COORDS,
      coords,
    };
    const result = pushFitPlaneRansacCoords(coords);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_CYLINDER_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_CYLINDER_COORDS,
      coords: points,
    };
    const result = pushFitCylinderCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_POINT_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_POINT_COORDS,
      coords: points,
    };
    const result = pushFitPointCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_CHEBY_CIRCLE_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_CHEBY_CIRCLE_COORDS,
      coords: points,
    };
    const result = pushFitChebyCircleCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_LINE_L_TWO_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_LINE_L_TWO_COORDS,
      coords: points,
    };
    const result = pushFitLineL2Coords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_LINE_RANSAC_COORDS action', () => {
    const coords = {
      points: [
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
      ],
      tolerance: 0.2,
    };
    const expected = {
      type: PUSH_FIT_LINE_RANSAC_COORDS,
      coords,
    };
    const result = pushFitLineRansacCoords(coords);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_CIRCLE_L_TWO_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_CIRCLE_L_TWO_COORDS,
      coords: points,
    };
    const result = pushFitCircleL2Coords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_FIT_SPHERE_COORDS action', () => {
    const points = [
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
      type: PUSH_FIT_SPHERE_COORDS,
      coords: points,
    };
    const result = pushFitSphereCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
  it('should create a PUSH_BUNDLE_ADJUSTMENT_COORDS action', () => {
    const points = [
      {
        stationId: 1000,
        geometryId: 1,
        x: 1.0,
        y: 2.0,
        z: 3.0,
        stdev: 0.1,
      },
      {
        stationId: 1000,
        geometryId: 1,
        x: 4.0,
        y: 5.0,
        z: 6.0,
        stdev: 0.1,
      },
    ];
    const expected = {
      type: PUSH_FIT_SPHERE_COORDS,
      coords: points,
    };
    const result = pushFitSphereCoords(points);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
});
