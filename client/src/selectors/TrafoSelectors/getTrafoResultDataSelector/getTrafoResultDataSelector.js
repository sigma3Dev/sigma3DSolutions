import { createSelector } from 'reselect';
import qte from 'quaternion-to-euler';

const getTrafoParamsSelector = state => state.trafoResult;
const getTrafoParamsEulerSelector = state => state.trafoResult;
const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getIsEulerSelector = state => state.trafoResult.isEuler;

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

export const getTrafoParamsEuler = createSelector(  
  getTrafoParamsEulerSelector, params => ([
    params.tx.toFixed(2),
    params.ty.toFixed(2),
    params.tz.toFixed(2),
    ...qte([params.q0, params.q1, params.q2, params.q3]).map(p => (p * 180 / Math.PI).toFixed(4))
  ])
)

export const getIsEuler = createSelector(
  getIsEulerSelector, isEuler => isEuler
)

export const getIsCalculating = createSelector(
  getIsCalculatingSelector, isCalculating => isCalculating
)