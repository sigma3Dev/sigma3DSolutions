import {
  CHANGE_BUNDLE_BASE_STATION,
  changeBundleBaseStation,
} from './changeBundleBaseStationActions';

describe('changeBundleBaseStationActions', () => {
  it('should create a CHANGE_BUNDLE_BASE_STATION action', () => {
    const station = 1000;
    const expected = {
      type: CHANGE_BUNDLE_BASE_STATION,
      station,
    };
    const result = changeBundleBaseStation(station);
    expect(result.type).toEqual(expected.type);
    expect(result.station).toEqual(expected.station);
    expect(result.receivedAt).toBeDefined();
  });
});
