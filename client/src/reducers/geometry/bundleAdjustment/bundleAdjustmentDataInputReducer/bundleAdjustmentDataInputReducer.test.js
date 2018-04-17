import { PUSH_BUNDLE_ADJUSTMENT_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_CYLINDER_INPUT } from '../../../../actions/clearInput/clearInputActions';
import BundleAdjustmentDataInputReducer from './bundleAdjustmentDataInputReducer';

describe('BundleAdjustmentDataInputReducer', () => {
  it('should handle PUSH_BUNDLE_ADJUSTMENT_COORDS', () => {
    const state = {
      points: [],
    };
    const action = {
      type: PUSH_BUNDLE_ADJUSTMENT_COORDS,
      coords: [
        {
          stationId: 1000,
          geometryId: 1,
          x: 1,
          y: 2,
          z: 3,
          stdev: 0.1,
        },
        {
          stationId: 2000,
          geometryId: 1,
          x: 4,
          y: 5,
          z: 6,
          stdev: 0.1,
        },
      ],
    };
    const expectedState = {
      points: [
        {
          stationId: 1000,
          geometryId: 1,
          x: 1,
          y: 2,
          z: 3,
          stdev: 0.1,
        },
        {
          stationId: 2000,
          geometryId: 1,
          x: 4,
          y: 5,
          z: 6,
          stdev: 0.1,
        },
      ],
    };
    const result = BundleAdjustmentDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_APPLY_TRAFO_INPUT', () => {
    const state = {
      points: [
        {
          stationId: 1000,
          geometryId: 1,
          x: 1,
          y: 2,
          z: 3,
          stdev: 0.1,
        },
        {
          stationId: 2000,
          geometryId: 1,
          x: 4,
          y: 5,
          z: 6,
          stdev: 0.1,
        },
      ],
    };
    const action = {
      type: CLEAR_CYLINDER_INPUT,
    };
    const expectedState = {
      points: [],
    };
    const result = BundleAdjustmentDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
