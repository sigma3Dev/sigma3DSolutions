import { PUSH_BUNDLE_ADJUSTMENT_COORDS } from '../../../../actions/pushCoords/pushCoordsActions';
import { CLEAR_BUNDLE_INPUT } from '../../../../actions/clearInput/clearInputActions';
import { CHANGE_BUNDLE_BASE_STATION } from '../../../../actions/changeBundleBaseStation/changeBundleBaseStationActions';
import bundleAdjustmentDataInputReducer from './bundleAdjustmentDataInputReducer';

describe('bundleAdjustmentDataInputReducer', () => {
  it('should handle PUSH_BUNDLE_ADJUSTMENT_COORDS', () => {
    const state = {
      points: [],
      baseStation: 0,
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
      baseStation: 1000,
    };
    const result = bundleAdjustmentDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CLEAR_BUNDLE_INPUT', () => {
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
      baseStation: 1000,
    };
    const action = {
      type: CLEAR_BUNDLE_INPUT,
    };
    const expectedState = {
      points: [],
      baseStation: 0,
    };
    const result = bundleAdjustmentDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
  it('should handle CHANGE_BUNDLE_BASE_STATION', () => {
    const state = {
      baseStation: 1,
    };
    const action = {
      type: CHANGE_BUNDLE_BASE_STATION,
      station: 1000,
    };
    const expectedState = {
      baseStation: 1000,
    };
    const result = bundleAdjustmentDataInputReducer(state, action);
    expect(result).toEqual(expectedState);
  });
});
