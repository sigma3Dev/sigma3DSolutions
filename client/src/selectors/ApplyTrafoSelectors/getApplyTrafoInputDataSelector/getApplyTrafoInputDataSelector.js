import { createSelector } from 'reselect';

const getPointsSelector = state => state.applyTrafoDataInput.points;
const getParamsSelector = state => state.applyTrafoDataInput.transformation;
export const getPoints = createSelector(
  getPointsSelector, points => points 
);

export const getParams = createSelector(
  getParamsSelector, params => params 
);