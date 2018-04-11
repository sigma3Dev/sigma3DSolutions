import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getQuatSelector = state => state.transformations.quatCardan.quatCardan.quat;
const getCardanSelector = state => state.transformations.quatCardan.quatCardan.cardan;

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

registerSelectors({ getQuat, getCardan });
