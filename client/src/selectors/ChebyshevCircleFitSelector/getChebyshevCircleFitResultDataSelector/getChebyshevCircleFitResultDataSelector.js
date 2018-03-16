import { createSelector } from 'reselect';

const getChebyshevCircleFitInputSelector = state => state.chebyshevCircleFitResult;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getChebyshevCircleFitInput = createSelector(
  getChebyshevCircleFitInputSelector, params => ([  
    params.x.toFixed(2),
    params.y.toFixed(2),
    params.z.toFixed(2),
    params.i.toFixed(5),
    params.j.toFixed(5),
    params.k.toFixed(5),
    params.radius.toFixed(1),
    params.tschebyDistance.toFixed(1),
    params.stdev.toFixed(1),
  ])
)

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
)