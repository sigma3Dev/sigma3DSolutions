import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitPlaneRansacResultSelector = state => state.geometry.fitPlaneRansac.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitPlaneRansacResult = createSelector(getFitPlaneRansacResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.i,
  params.j,
  params.k,
  params.stdev,
  params.numPoints,
]);
