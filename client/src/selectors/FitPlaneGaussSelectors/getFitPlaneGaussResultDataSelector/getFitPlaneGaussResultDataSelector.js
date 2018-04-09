import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitPlaneGaussResultSelector = state => state.geometry.fitPlaneGauss.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitPlaneGaussResult = createSelector(getFitPlaneGaussResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.i,
  params.j,
  params.k,
  params.stdev,
  params.fittingErrors,
]);
