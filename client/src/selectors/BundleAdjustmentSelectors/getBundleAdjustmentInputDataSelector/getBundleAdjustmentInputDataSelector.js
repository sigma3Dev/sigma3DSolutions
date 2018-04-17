import { createSelector } from 'reselect';

const getBundleAdjustmentInputDataSelector = state => state.geometry.bundleAdjustment.input.points;

export const getBundleAdjustmentPoints = createSelector(
  getBundleAdjustmentInputDataSelector,
  points => points,
);
