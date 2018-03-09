import { createSelector } from 'reselect';

const getTrafoParamsSelector = state => state.trafoResult;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getTrafoParams = createSelector(
  getTrafoParamsSelector, params => ([  
    params.tx.toFixed(2),
    params.ty.toFixed(2),
    params.tz.toFixed(2),
    params.q0.toFixed(4),
    params.q1.toFixed(4),
    params.q2.toFixed(4),
    params.q3.toFixed(4),
  ])
)

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
)