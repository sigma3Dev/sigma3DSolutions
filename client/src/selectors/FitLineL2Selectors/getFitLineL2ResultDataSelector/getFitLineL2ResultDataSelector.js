import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitLineL2ResultSelector = state => state.geometry.fitLineL2.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitLineL2Result = createSelector(getFitLineL2ResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.i,
  params.j,
  params.k,
  params.stdev,
]);
