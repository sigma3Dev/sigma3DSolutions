import { createSelector } from 'reselect';

const getChebyshevCircleFitInputSelector = state => state.chebyshevCircleFitResult;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getChebyshevCircleFitInput = createSelector(
  getChebyshevCircleFitInputSelector, params => ([  
    params.x.toFixed(2),
    params.y.toFixed(2),
    params.z.toFixed(2),
    params.i.toFixed(6),
    params.j.toFixed(6),
    params.k.toFixed(6),
    params.radius.toFixed(2),
    params.tschebyDistance.toFixed(2),
    params.stdev.toFixed(2),
  ])
)

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
)