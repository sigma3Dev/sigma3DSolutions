import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getFitSphereResultSelector = state => state.geometry.fitSphere.result;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getFitSphereResult = createSelector(getFitSphereResultSelector, params => [
  params.x,
  params.y,
  params.z,
  params.radius,
  params.stdev,
]);
