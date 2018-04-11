import {
  createSelectorWithDependencies as createSelector,
  registerSelectors,
} from 'reselect-tools';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getApplyTrafoResultSelector = state => state.transformations.applyTrafo.result.points;

export const getIsCalculating = createSelector(
  getIsCalculatingSelector,
  isCalculating => isCalculating,
);

export const getApplyTrafoResult = createSelector(getApplyTrafoResultSelector, points => points);

registerSelectors({ getIsCalculating, getApplyTrafoResult });
