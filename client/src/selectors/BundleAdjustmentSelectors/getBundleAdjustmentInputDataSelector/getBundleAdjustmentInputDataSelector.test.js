import {
  getBundleAdjustmentPoints,
  getBundleAdjustmentBaseStation,
} from './getBundleAdjustmentInputDataSelector';

describe('getBundleAdjustmentInputDataSelector Used By BundleAdjustmentInputContainer', () => {
  it('getBundleAdjustmentPoints', () => {
    const state = {
      geometry: {
        bundleAdjustment: {
          input: {
            points: [
              {
                stationId: 1000,
                geometryId: 1,
                x: 1.0,
                y: 2.0,
                z: 3.0,
                stdev: 0.1,
              },
              {
                stationId: 2000,
                geometryId: 2,
                x: 6.0,
                y: 8.0,
                z: 5.0,
                stdev: 0.1,
              },
            ],
          },
        },
      },
    };
    const expected = [
      {
        stationId: 1000,
        geometryId: 1,
        x: 1.0,
        y: 2.0,
        z: 3.0,
        stdev: 0.1,
      },
      {
        stationId: 2000,
        geometryId: 2,
        x: 6.0,
        y: 8.0,
        z: 5.0,
        stdev: 0.1,
      },
    ];
    const result = getBundleAdjustmentPoints(state);
    expect(result).toEqual(expected);
  });
  it('getBundleAdjustmentBaseStation', () => {
    const state = {
      geometry: {
        bundleAdjustment: {
          input: {
            baseStation: 1000,
          },
        },
      },
    };
    const expected = 1000;
    const result = getBundleAdjustmentBaseStation(state);
    expect(result).toEqual(expected);
  });
});
