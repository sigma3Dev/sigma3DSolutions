import { createSelector } from 'reselect';

const getQuatSelector = state => state.quatCardan.quat;
const getCardanSelector = state => state.quatCardan.cardan;

export const getQuat = createSelector(getQuatSelector, params => [
  params.Q0,
  params.Q1,
  params.Q2,
  params.Q3,
]);

export const getCardan = createSelector(getCardanSelector, params => [
  params.Rx,
  params.Ry,
  params.Rz,
]);
