import {
  getBundleAdjustmentResult,
  getIsCalculating,
} from './getBundleAdjustmentResultDataSelector';

describe('getBundleAdjustmentResultDataSelector Used By BundleAdjustmentInputContainer', () => {
  it('getBundleAdjustmentResult', () => {
    const state = {
      geometry: {
        bundleAdjustment: {
          result: {
            baseStationId: 1,
            transformationParameters: [
              {
                stationId: 1,
                tx: 0.0,
                ty: 0.0,
                tz: 0.0,
                m: 1.0,
                q0: 1.0,
                q1: 1.0,
                q2: 1.0,
                q3: 1.0,
              },
              {
                stationId: 2,
                tx: 10.0,
                ty: 10.0,
                tz: 10.0,
                m: 1.0,
                q0: 1.0,
                q1: 1.0,
                q2: 1.0,
                q3: 1.0,
              },
            ],
            geometries: [
              {
                id: 3,
                x: 23.5,
                y: 33.3,
                z: 45.7,
                stdev: 0.0,
              },
              {
                id: 2,
                x: 5.5,
                y: 3.3,
                z: 7.7,
                stdev: 0.0,
              },
              {
                id: 5,
                x: 16.5,
                y: 44.3,
                z: 34.7,
                stdev: 0.0,
              },
            ],
          },
        },
      },
    };
    const expected = [
      1,
      [[1, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0], [2, 10.0, 10.0, 10.0, 1.0, 1.0, 1.0, 1.0, 1.0]],
      [[3, 23.5, 33.3, 45.7, 0.0], [2, 5.5, 3.3, 7.7, 0.0], [5, 16.5, 44.3, 34.7, 0.0]],
    ];
    const result = getBundleAdjustmentResult(state);
    expect(result).toEqual(expected);
  });
  it('getIsCalculating', () => {
    const state = {
      calculationStatus: {
        isCalculating: false,
      },
    };
    const expected = false;
    const result = getIsCalculating(state);
    expect(result).toEqual(expected);
  });
});
