import {
  PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES,
  pushChebyshevCircleFitCoords,
} from './pushChebyshevCircleFitCoordsActions';

describe('pushChebyshevCircleFitCoordsActions', () => {
  it('should create a PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES action', () => {
    const circlePoints = [
      {
        x: 1.0,
        y: 0.0,
        z: 0.0,
      },
      {
        x: 0.0,
        y: -1.0,
        z: 0.0,
      },
      {
        x: -1.0,
        y: 0.0,
        z: 0.0,
      },
    ];
    const expected = {
      type: PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES,
      coords: circlePoints,
    };
    const result = pushChebyshevCircleFitCoords(circlePoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
});
