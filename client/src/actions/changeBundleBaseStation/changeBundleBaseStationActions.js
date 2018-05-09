export const CHANGE_BUNDLE_BASE_STATION = 'CHANGE_BUNDLE_BASE_STATION';

export const changeBundleBaseStation = station => ({
  type: CHANGE_BUNDLE_BASE_STATION,
  station,
  receivedAt: Date.now(),
});
