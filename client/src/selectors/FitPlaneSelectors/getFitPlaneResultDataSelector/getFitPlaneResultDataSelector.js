import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitPlaneResultSelector = state => state.fitPlaneResult;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitPlaneResult = createSelector(getFitPlaneResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.i,
  params.j,
  params.k,
  params.stdev,
  params.fittingErrors,
]);
