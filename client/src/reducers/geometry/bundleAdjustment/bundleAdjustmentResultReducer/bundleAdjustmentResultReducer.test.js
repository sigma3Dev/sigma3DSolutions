import { SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS } from '../../../../actions/submitBundleAdjustmentCoords/submitBundleAdjustmentCoordsActions';
import bundleAdjustmentResultReducer from './bundleAdjustmentResultReducer';

describe('bundleAdjustmentResultReducer', () => {
  it('should handle SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS', () => {
    const state = {
      baseStationId: undefined,
      transformationParameters: [],
      geometries: [],
    };
    const action = {
      type: SUBMIT_BUNDLE_ADJUSTMENT_COORDS_SUCCESS,
      response: {
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
    };
    const expectedState = {
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
    };
    const result = bundleAdjustmentResultReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
