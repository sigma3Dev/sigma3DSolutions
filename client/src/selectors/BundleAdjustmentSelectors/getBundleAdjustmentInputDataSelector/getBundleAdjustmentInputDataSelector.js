import { createSelector } from 'reselect';

const getBundleAdjustmentPointsSelector = state => state.geometry.bundleAdjustment.input.points;
const getBundleAdjustmentBaseStationSelector = state =>
  state.geometry.bundleAdjustment.input.baseStation;

export const getBundleAdjustmentPoints = createSelector(
  getBundleAdjustmentPointsSelector,
  points => points,
);

export const getBundleAdjustmentBaseStation = createSelector(
  getBundleAdjustmentBaseStationSelector,
  baseStation => baseStation,
);
