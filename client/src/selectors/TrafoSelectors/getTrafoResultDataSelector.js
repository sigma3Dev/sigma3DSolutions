import { createSelector } from 'reselect';

const getTrafoParamsSelector = state => state.trafoResult;
const getErrorSelector = state => state.trafoDataInput.error;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;

export const getTrafoParams = createSelector(
  getTrafoParamsSelector, response => ([
    Math.round(response.q0 * 10000) / 10000,
    Math.round(response.q1 * 10000) / 10000,
    Math.round(response.q2 * 10000) / 10000,
    Math.round(response.q3 * 10000) / 10000,
    Math.round(response.tx * 100) / 100,
    Math.round(response.ty * 100) / 100,
    Math.round(response.tz * 100) / 100,
  ])
)

export const getError = createSelector(
  getErrorSelector, error => error 
)

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
)