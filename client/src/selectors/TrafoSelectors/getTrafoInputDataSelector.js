import { createSelector } from 'reselect';

const getStartSystemPointsSelector = state => state.trafoDataInput.startSystemPoints;
const getTargetSystemPointsSelector = state => state.trafoDataInput.targetSystemPoints;

export const getStartSystemPoints = createSelector(
  getStartSystemPointsSelector, points => points 
)

export const getTargetSystemPoints = createSelector(
  getTargetSystemPointsSelector, points => points 
)