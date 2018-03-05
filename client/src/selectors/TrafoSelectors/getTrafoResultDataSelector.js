import { createSelector } from 'reselect';

const getTrafoParamsSelector = state => state.trafoResult;
const getErrorSelector = state => state.trafoDataInput.error;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getTrafoParams = createSelector(
  getTrafoParamsSelector, response => ([  
    response.tx.toFixed(2),
    response.ty.toFixed(2),
    response.tz.toFixed(2),
    response.q0.toFixed(4),
    response.q1.toFixed(4),
    response.q2.toFixed(4),
    response.q3.toFixed(4),
  ])
)

export const getError = createSelector(
  getErrorSelector, error => error 
)

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
)