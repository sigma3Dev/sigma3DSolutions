import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitPointResultSelector = state => state.geometry.fitPoint.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitPointResult = createSelector(getFitPointResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.stdev,
  params.fittingErrors,
]);
