import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitLineRansacResultSelector = state => state.geometry.fitLineRansac.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitLineRansacResult = createSelector(getFitLineRansacResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.i,
  params.j,
  params.k,
  params.stdev,
  params.numPoints,
]);
