import { createSelector } from 'reselect';

const getStartSystemPointsSelector = state => state.threeDTrafoDataInput.startSystemPoints;
const getTargetSystemPointsSelector = state => state.threeDTrafoDataInput.targetSystemPoints;

export const getStartSystemPoints = createSelector(
  getStartSystemPointsSelector, points => points 
)

export const getTargetSystemPoints = createSelector(
  getTargetSystemPointsSelector, points => points 
)

export const getListOfUsedCoords = createSelector(
  getTargetSystemPointsSelector, points => points.map(p => ([p.useX, p.useY, p.useZ]))
)