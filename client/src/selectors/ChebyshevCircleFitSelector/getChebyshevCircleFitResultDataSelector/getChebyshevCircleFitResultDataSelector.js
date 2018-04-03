import { createSelector } from 'reselect';

const getChebyshevCircleFitInputSelector = state => state.chebyshevCircleFitResult;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getChebyshevCircleFitInput = createSelector(
  getChebyshevCircleFitInputSelector,
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
