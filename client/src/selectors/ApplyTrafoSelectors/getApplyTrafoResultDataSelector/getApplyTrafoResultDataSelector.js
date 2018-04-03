import { createSelector } from 'reselect';

const getIsCalculatingSelector = state => state.calculationStatus.isCalculating;
const getApplyTrafoResultSelector = state => state.applyTrafoDataResult.points;

export
const getIsCalculating = createSelector(getIsCalculatingSelector, isCalculating => isCalculating);

export
const getApplyTrafoResult = createSelector(getApplyTrafoResultSelector, points => points);
