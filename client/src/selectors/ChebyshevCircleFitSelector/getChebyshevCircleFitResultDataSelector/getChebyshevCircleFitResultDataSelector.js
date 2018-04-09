import { createSelector } from 'reselect';

const getChebyshevCircleFitResultSelector = state => state.geometry.chebyshevCircleFit.result;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getChebyshevCircleFitResult = createSelector(
  getChebyshevCircleFitResultSelector,
  params => [
    params.x,
    params.y,
    params.z,
    params.i,
    params.j,
    params.k,
    params.radius,
    params.tschebyDistance,
    params.stdev,
  ],
);

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);
