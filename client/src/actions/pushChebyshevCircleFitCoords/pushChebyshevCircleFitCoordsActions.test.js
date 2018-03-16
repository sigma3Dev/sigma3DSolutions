import {
  PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES,
  pushChebyshevCircleFitCoords,
} from './pushChebyshevCircleFitCoordsActions';

describe('pushChebyshevCircleFitCoordsActions', () => {
  it('should create a PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES action', () => {
    const circlePoints = [
    {
        x: 1.00,
        y: 0.00,
        z: 0.00
    }, {
        x: 0.00,
        y: -1.00,
        z: 0.00
    }, {
        x: -1.00,
        y: 0.00,
        z: 0.00
    }];
    const expected = {
      type: PUSH_CHEBYSHEV_CIRCLE_FIT_COORDINATES,
      coords: circlePoints
    };
    const result = pushChebyshevCircleFitCoords(circlePoints);
    expect(result.type).toEqual(expected.type);
    expect(result.coords).toEqual(expected.coords);
    expect(result.receivedAt).toBeDefined();
  });
});