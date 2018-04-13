import { createSelector } from 'reselect';

const getFitCircleChebyshevResultSelector = state => state.geometry.fitCircleChebyshev.result;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getFitCircleChebyshevResult = createSelector(
  getFitCircleChebyshevResultSelector,
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
