import { createSelector } from 'reselect';

const getPointsSelector = state => state.applyTrafoDataInput.points;

export const getPoints = createSelector(
  getPointsSelector, points => points 
)
