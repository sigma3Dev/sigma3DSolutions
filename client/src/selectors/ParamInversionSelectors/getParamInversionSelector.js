import { createSelector } from 'reselect';

const getParamInversionSelector = state => state.transformations.paramInversion.paramInversion;

export const getParamInversion = createSelector(getParamInversionSelector, params => [
  params.tx.toFixed(2),
  params.ty.toFixed(2),
  params.tz.toFixed(2),
  params.q0.toFixed(4),
  params.q1.toFixed(4),
  params.q2.toFixed(4),
  params.q3.toFixed(4),
  params.m.toFixed(1),
]);
