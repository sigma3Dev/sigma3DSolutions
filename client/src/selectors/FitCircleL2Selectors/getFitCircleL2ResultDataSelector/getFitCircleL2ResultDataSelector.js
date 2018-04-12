import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitCircleL2ResultSelector = state => state.geometry.fitCircleL2.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitCircleL2Result = createSelector(getFitCircleL2ResultSelector, params => [
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
