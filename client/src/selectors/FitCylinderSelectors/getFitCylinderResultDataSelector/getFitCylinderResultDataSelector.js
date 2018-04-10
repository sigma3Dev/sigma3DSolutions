import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitCylinderResultSelector = state => state.geometry.fitCylinder.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitCylinderResult = createSelector(getFitCylinderResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.i,
  params.j,
  params.k,
  params.radius,
  params.stdev,
  params.fittingErrors,
]);
