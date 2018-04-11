import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getPointsSelector = state => state.transformations.applyTrafo.input.points;
const getParamsSelector = state => state.transformations.applyTrafo.input.transformation;

export const getPoints = createSelector(getPointsSelector, points => points);

export const getParams = createSelector(getParamsSelector, params => params);

registerSelectors({ getPoints, getParams });
